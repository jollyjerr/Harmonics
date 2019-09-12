const playButton = document.querySelector('#play_button')
const sidebar = document.querySelector('#sidebar_container')
const composingTable = document.querySelector('#composing_table')
const sidebarButton = document.querySelector('nav button')
const cardHolder = document.querySelector('#card_holder')
const score = document.querySelector('#score')
const loginForm = document.querySelector('#loginForm')
const signupForm = document.querySelector('#signupForm')
const savePhraseTab = document.querySelector('#savePhrase')
const loadPhraseTab = document.querySelector('#loadPhrase')


sidebar.addEventListener('click', () => sidebarEvents(event))
playButton.addEventListener('click', play)
document.addEventListener('keyup', () => {
    if (event.key === ' ') {
        event.preventDefault()
        play()
    }
    if (event.key === 'enter') {
        event.preventDefault()
    }
})


function acceptLoggedInUser() {
    currentPhrase = []
    previousKey = undefined
    currentKey = undefined
    modalBorrowing = true
    chordIdCounter = 0
    currentPhrase = []
    removeKeyOnSidebar()
    clearLoginForms()
    renderComposingScreen()
    clearChordMenu()
    clearScore()
}

function sidebarEvents(event) {
    if (event.target.classList.contains('item')) {
        switch (event.target.textContent) {
            case "Set Key":
                openPickKeyMenu()
                break;
            case "Settings":
                openSettings()
                break;
            case "Save Phrase":
                openSavePhraseMenu()
                break;
            case "Load Phrase":
                openLoadPhraseMenu()
                break;
            case "Sign Out":
                signOut()
                break;
        }
    } else {
        console.warn("event triggered without handler")
    }
}

function openPickKeyMenu() {
    if (!score.classList.contains('inverted')) {
        clearChordMenu()
        clearScore()
        keys.forEach(key => {
            let card = createSmallButton()
            card.textContent = `${key.name} ${key.mode}`
            card.addEventListener('click', () => changeCurrentKey(key.name, key.mode))
            cardHolder.append(card)
        })
    }
}

function openSettings() {
    clearScore()
    darken(score)
    renderTonalityForm()
}

function openSavePhraseMenu() {
    if (currentPhrase.length >= 1 && cardHolder.style.display === "") {
        clearScore()
        darken(score)
        renderPhraseForm()
    } else {
        savePhraseTab.style.color = "red"
        setTimeout(() => {
            savePhraseTab.style.color = "white"
        }, 1000);
    }
}

function openLoadPhraseMenu() {
    fetchUserPhrases()
        .then(convertToStandardPhraseFormat)
        .then(renderLoadPhraseListItems)
}

function initiateLogin() {
    clearComposingScreen()
    renderLoginForms()
    loginForm.addEventListener('submit', login)
    signupForm.addEventListener('submit', signup)
}

function login() {
    event.preventDefault()
    let formData = new FormData(loginForm)
    let name = formData.get('name')
    let password = formData.get('password')
    loginUser(name, password)
}

function signup() {
    event.preventDefault()
    let formData = new FormData(signupForm)
    let name = formData.get('name')
    let password = formData.get('password')
    newUser(name, password)
}

function exitSettings() {
    lighten(score)
    renderPhrase(currentPhrase)
}

function displayCurrentKey() {
    removeKeyOnSidebar()
    renderKeyOnSidebar()
}

function saveCurrentPhrase(name) {
    fetch(BackendURL, postPhraseObjectFrom(currentPhrase, name))
    exitSettings()
}

function clearScore() {
    while (score.firstChild) {
        score.removeChild(score.firstChild)
    }
}

function clearComposingScreen() {
    composingTable.style.display = "none"
    sidebar.style.display = "none"
}

function renderFailedLoginMessage() {
    alert("Username or Password was incorrect")
}

function renderComposingScreen() {
    composingTable.style.display = ""
    sidebar.style.display = ""
}

function renderLoginForms() {
    loginForm.style.display = "block"
    signupForm.style.display = "block"
}

function clearLoginForms() {
    loginForm.style.display = "none"
    signupForm.style.display = "none"
}

function darken(htmlElement) {
    addManyClasses(htmlElement, ['ui', 'inverted', 'segment'])
}

function lighten(htmlElement) {
    htmlElement.classList.remove('clearing')
    htmlElement.classList.remove('ui')
    htmlElement.classList.remove('inverted')
    htmlElement.classList.remove('segment')
}

function renderTonalityForm() {
    score.classList.add('clearing')
    score.appendChild(createOptionSelection())
    score.appendChild(createModalSetting())
    score.appendChild(exitSettingsButton())
}

function renderPhraseForm() {
    score.classList.add('clearing')
    score.appendChild(phraseNameForm())
    score.appendChild(phraseFormBackButton())
    score.appendChild(savePhraseButton())
}

function phraseNameForm() {
    let div = createLargeForm()
    let p = createSmallTitle()
    let input = document.createElement('input')
    p.innerText = 'Name:'
    div.append(p, input)
    return div
}

function phraseFormBackButton() {
    let button = createSmallButton()
    button.textContent = "Back"
    button.addEventListener('click', exitSettings)
    return button
}

function savePhraseButton() {
    let button = createSmallButton()
    addManyClasses(button, ['positive', 'right', 'floated'])
    button.textContent = "Save"
    button.addEventListener('click', () => {
        let name = event.target.parentElement.querySelector('input').value
        saveCurrentPhrase(name)
    })
    return button
}

function exitSettingsButton() {
    let button = createMedButton()
    addManyClasses(button, ['right', 'floated', 'olive', 'basic'])
    button.textContent = 'Back'
    button.addEventListener('click', exitSettings)
    return button
}

function createOptionSelection() {
    let options = ['Common Practice', '20th Century']
    let div = createLargeCard()
    let p = createSmallTitle()
    p.innerText = 'Recommend by:'
    div.append(p)
    options.forEach(mode => {
        let button = createSmallButton()
        button.innerText = mode
        button.addEventListener('click', () => changeHarmonyEra(mode))
        div.appendChild(button)
    })
    return div
}

function createModalSetting() {
    let div = createLargeCard()
    let p = createSmallTitle()
    p.innerText = "Modal Borrowing:"
    let button = createSmallButton()
    renderModalBorrowingButton(button)
    button.addEventListener('click', () => alternateModalBorrowing(event.target))
    div.append(p, button)
    return div
}

function createSmallTitle() {
    let p = document.createElement('p')
    addManyClasses(p, ['ui', 'inverted', 'header'])
    return p
}

function addManyClasses(element, classArr) {
    classArr.forEach(trait => {
        element.classList.add(trait)
    })
}

function alternateModalBorrowing(button) {
    modalBorrowing = !modalBorrowing
    if (currentKey) {
        clearChordMenu()
        initializeChordSelection()
    }
    renderModalBorrowingButton(button)
}

function renderModalBorrowingButton(button) {
    if (modalBorrowing) {
        button.textContent = "On"
        button.classList.remove('negative')
        button.classList.add('positive')
    } else {
        button.textContent = "Off"
        button.classList.remove('positive')
        button.classList.add('negative')
    }
    return button
}

function renderChord(chordObj) {
    let div = createMedButton()
    div.textContent = `${chordObj.chord.name} ${chordObj.chord.type}`
    div.addEventListener('click', () => removeChord(event, chordObj))
    score.appendChild(div)
}

function renderPhrase(phraseArr) {
    clearScore()
    phraseArr.forEach(chord => {
        renderChord(chord)
    })
}

function renderLoadPhraseListItems(phraseArr) {
    if (phraseArr.length >= 1) {
        lighten(score)
        clearScore()
        cardHolder.style.display = "none"
        phraseArr.forEach(renderOldPhrase)
    } else {
        loadPhraseTab.style.color = "red"
        setTimeout(() => {
            loadPhraseTab.style.color = "white"
        }, 1000);
    }
}

function renderOldPhrase(phraseObj) {
    let div = createLargeCard()
    let p = createSmallButton()
    let d = createSmallButton()
    p.textContent = phraseObj.name
    d.textContent = "Delete"
    addManyClasses(p, ['fluid'])
    addManyClasses(d, ['negative', 'compact', 'left', 'floated'])
    p.addEventListener('click', () => changeCurrentPhrase(phraseObj.phrase, phraseObj.key))
    d.addEventListener('click', () => deleteSavedPhrase(phraseObj.id))
    div.append(p)
    phraseObj.phrase.forEach(chord => {
        div.append(
            document.createElement('p').textContent = `${chord.name} ${chord.type} `
        )
    })
    div.append(d)
    addManyClasses(div, ['ui', 'raised', 'segment'])
    score.appendChild(div)
}

function changeCurrentPhrase(phrase, key) {
    cardHolder.style.display = "";
    clearScore()
    currentPhrase = []
    changeCurrentKey(key.name, key.mode)
    phrase.forEach(addChord)
}

function convertToStandardPhraseFormat(DBphrases) {
    return DBphrases.map(object => {
        let phrase = object.content.split(',')
        let parsedPhrase = phrase.map(chord => {
            let name = chord.split(' ')[0]
            let type = chord.split(' ')[1]
            return chords.find(c => {
                return c.name === name && c.type === type
            })
        })
        let keyName = object.key.split(' ')[0]
        let keyMode = object.key.split(' ')[1]
        let parsedKey = keys.find(k => {
            return k.name === keyName && k.mode === keyMode
        })
        let namedPhrase = {
            id: object.id,
            name: object.name,
            key: parsedKey,
            phrase: parsedPhrase
        }
        return namedPhrase
    })
}

function clearChordMenu() {
    while (cardHolder.firstChild) {
        cardHolder.removeChild(cardHolder.firstChild);
    }
}

function renderKeyOnSidebar() {
    let div = document.createElement('div')
    addManyClasses(div, ['ui', 'mini', 'circular', 'segment'])
    div.textContent = `${currentKey.name} ${currentKey.mode}`
    sidebar.appendChild(div)
}

function removeKeyOnSidebar() {
    let old = document.querySelector('.ui.mini.circular.segment')
    old ?
        sidebar.removeChild(old) :
        undefined
}

function renderBasicChordCard(chord) {
    let div = createSmallButton()
    div.textContent = `${chord.name} ${chord.type}`
    div.addEventListener('click', () => addChord(chord))
    cardHolder.appendChild(div)
}

function createSmallButton() {
    let div = document.createElement('button')
    addManyClasses(div, ['ui', 'mini', 'circular', 'button'])
    return div
}

function createMedButton() {
    let div = document.createElement('button')
    addManyClasses(div, ['ui', 'small', 'button'])
    return div
}

function createLargeCard() {
    let div = document.createElement('div')
    addManyClasses(div, ['ui', 'basic', 'segment'])
    return div
}

function createLargeForm() {
    let form = document.createElement('form')
    addManyClasses(form, ['ui', 'basic', 'segment'])
    return form
}