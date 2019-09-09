const playButton = document.querySelector('#play_button')
const sidebar = document.querySelector('#sidebar_container')
const sidebarButton = document.querySelector('nav button')
const cardHolder = document.querySelector('#card_holder')
const score = document.querySelector('#score')


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
        }
    } else {
        console.warn("event triggered without handler")
    }
}

function openPickKeyMenu() {
    clearChordMenu()
    keys.forEach(key => {
        let card = createSmallButton()
        card.textContent = `${key.name} ${key.mode}`
        card.addEventListener('click', () => changeCurrentKey(key.name, key.mode))
        cardHolder.append(card)
    })
}

function openSettings() {
    clearScore()
    darken(score)
    renderTonalityForm()
}

function displayCurrentKey() {
    removeKeyOnSidebar()
    renderKeyOnSidebar()
}

function clearChordMenu() {
    while (cardHolder.firstChild) {
        cardHolder.removeChild(cardHolder.firstChild);
    }
}

function renderKeyOnSidebar() {
    let div = document.createElement('div')
    div.classList.add('ui')
    div.classList.add('mini')
    div.classList.add('circular')
    div.classList.add('segment')
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
    div.classList.add('ui')
    div.classList.add('mini')
    div.classList.add('circular')
    div.classList.add('button')
    return div
}

function createMedButton() {
    let div = document.createElement('button')
    div.classList.add('ui')
    div.classList.add('small')
    div.classList.add('button')
    return div
}

function createLargeCard() {
    let div = document.createElement('div')
    div.classList.add('ui')
    div.classList.add('basic')
    div.classList.add('segment')
    return div
}

function play() {
    let interval = 1500
    currentPhrase.forEach(function(chord, index) {
        setTimeout(function() {
            playChord(chord)
        }, index * interval);
    });
}

function playChord(chord) {
    let sound = new Howl({
        src: [chord.sound]
    })
    sound.play()
}

function clearScore() {
    while (score.firstChild) {
        score.removeChild(score.firstChild)
    }
}

function darken(htmlElement) {
    htmlElement.classList.add('ui')
    htmlElement.classList.add('inverted')
    htmlElement.classList.add('segment')
}

function lighten(htmlElement) {
    htmlElement.classList.remove('ui')
    htmlElement.classList.remove('inverted')
    htmlElement.classList.remove('segment')
}

function renderTonalityForm() {
    let options = ['Common Practice', '20th Century']
    let div = createLargeCard()
    let p = createSmallTitle()
    p.innerText = 'Recommend by:'
    div.append(p)
    options.forEach(mode => {
        let button = createMedButton()
        button.innerText = mode
        button.addEventListener('click', () => changeHarmonyEra(mode))
        div.appendChild(button)
    })
    score.appendChild(div)
}

function createSmallTitle() {
    let p = document.createElement('p')
    p.classList.add('ui')
    p.classList.add('inverted')
    p.classList.add('header')
    return p
}