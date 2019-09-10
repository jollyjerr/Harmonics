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

function requireLogin() {
    userToken ?
        console.log(userToken) :
        initiateLogin()
}

function newUser(name, password) {

}

function loginUser(name, password) {

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
            // user_id: currentUser.id
        })
    }
    return obj;
}