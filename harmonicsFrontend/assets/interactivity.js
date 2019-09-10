const playButton = document.querySelector('#play_button')
const sidebar = document.querySelector('#sidebar_container')
const sidebarButton = document.querySelector('nav button')
const cardHolder = document.querySelector('#card_holder')
const score = document.querySelector('#score')

let BackendURL = 'http://localhost:3000/phrases'


sidebar.addEventListener('click', () => sidebarEvents(event))
playButton.addEventListener('click', play)


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
        }
    } else {
        console.warn("event triggered without handler")
    }
}

function openPickKeyMenu() {
    if (!score.classList.contains('inverted')) {
        clearChordMenu()
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
    clearScore()
    darken(score)
    renderPhraseForm()
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
    if (currentPhrase.length >= 1) {
        fetch(BackendURL, postPhraseObjectFrom(currentPhrase, name))
    } else {
        alert("John Cage has ownership")
    }
    exitSettings()
}

function clearScore() {
    while (score.firstChild) {
        score.removeChild(score.firstChild)
    }
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
    button.addEventListener('submit', () => saveCurrentPhrase(event.target))
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
            content: serialized.join()
        })
    }
    return obj;
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