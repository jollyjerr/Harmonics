let BackendURL = 'https://harmoniccalculatorapi.herokuapp.com/phrases/'
let UserURL = 'https://harmoniccalculatorapi.herokuapp.com/users/'
let loginURL = 'https://harmoniccalculatorapi.herokuapp.com/login'
let reloginURL = 'https://harmoniccalculatorapi.herokuapp.com/relogin'

function play() {
    let interval = 1500
    currentPhrase.forEach(function(chord, index) {
        setTimeout(function() {
            playChord(chord["chord"])
        }, index * interval);
    });
}

function playChord(chord) {
    let sound = new Howl({
        src: [chord.sound]
    })
    sound.play()
}

function establishCurrentUser() {
    if (localStorage.jwt) {
        reLoginUser(localStorage.jwt)
    } else {
        requireLogin()
    }
}

function reLoginUser(jwt) {
    fetch(reloginURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: jwt
            }
        })
        .then(resp => resp.json())
        .then(json => {
            currentUser = json.user_id
        })
    requireLogin()
}

function requireLogin() {
    userToken = localStorage.jwt
    userToken ?
        acceptLoggedInUser() :
        initiateLogin()
}

function newUser(name, password) {
    fetch(UserURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "password": password
            })
        })
        .then(resp => resp.json())
        .then((response) => {
            localStorage.setItem("jwt", response.token)
            establishCurrentUser()
        })
}

function loginUser(name, password) {
    fetch(loginURL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.token) {
                localStorage.setItem("jwt", response.token)
                establishCurrentUser()
            } else {
                renderFailedLoginMessage()
            }
        })
}

function signOut() {
    localStorage.removeItem("jwt")
    establishCurrentUser()
}

function postPhraseObjectFrom(phraseArr, name) {
    let serialized = phraseArr.map(chordObj => {
        return `${chordObj.chord.name} ${chordObj.chord.type}`
    })
    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            content: serialized.join(),
            key: `${currentKey.name} ${currentKey.mode}`,
            user_id: currentUser
        })
    }
    return obj;
}

function fetchUserPhrases() {
    return fetch(BackendURL + currentUser, {
            method: "GET",
            headers: {
                "accepts": "application/json"
            }
        })
        .then(resp => resp.json())
}

function deleteSavedPhrase(id) {
    fetch(BackendURL + id, { method: "DELETE" })
    event.target.parentElement.remove()
}