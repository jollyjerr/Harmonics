const cardHolder = document.querySelector('#card_holder')
const sidebarButton = document.querySelector('nav button')
const sidebar = document.querySelector('#sidebar_container')

let previousKey = undefined
let currentKey = undefined
let desiredKey = undefined


//event listners
sidebar.addEventListener('click', () => sidebarEvents(event))

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




//functions

function openPickKeyMenu() {
    removeCardHolderCards()
    keys.forEach(key => {
        let card = createSmallButton()
        card.textContent = `${key.name} ${key.mode}`
        card.addEventListener('click', () => changeCurrentKey(key.name, key.mode))
        cardHolder.append(card)
    })
}


function changeCurrentKey(name, mode) {
    previousKey = currentKey
    currentKey = keys.find(key => {
        return key.name === name && key.mode === mode
    })
    removeCardHolderCards()
    displayCurrentKey()
}

function displayCurrentKey() {
    removeKeyOnSidebar()
    renderKeyOnSidebar()
    openPickChordMenu()
}

function openPickChordMenu() {
    let chordMenu = Object.keys(currentKey).splice(2, 9)
    chordMenu.map(chord => {
        renderBasicChordCard(currentKey[chord])
    })
}

function removeCardHolderCards() {
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

function openSettings() {
    console.log("There are no settings yet, yo")
}

function createSmallButton() {
    let div = document.createElement('button')
    div.classList.add('ui')
    div.classList.add('mini')
    div.classList.add('circular')
    div.classList.add('button')
    return div
}

function renderBasicChordCard(chord) {
    let div = createSmallButton()
    div.textContent = `${chord.name} ${chord.type}`
    cardHolder.appendChild(div)
}