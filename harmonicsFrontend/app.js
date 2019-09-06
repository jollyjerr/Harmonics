const cardHolder = document.querySelector('#card_holder')
const sidebarButton = document.querySelector('nav button')
const sidebar = document.querySelector('#sidebar_container')

let currentKey = undefined


//event listners
sidebar.addEventListener('click', () => sidebarEvents(event))

function sidebarEvents(event) {
    if (event.target.classList.contains('item')) {
        switch (event.target.textContent) {
            case "Set Key":
                pickKeyMenu()
                break;
            case "Settings":
                openSettings()
                break;
        }
    } else {
        console.warn("event failed")
    }
}




//functions

function pickKeyMenu() {
    keys.forEach(key => {
        let card = createSmallCard()
        card.textContent = `${key.name} ${key.mode}`
        card.addEventListener('click', () => changeCurrentKey(key.name, key.mode))
        cardHolder.append(card)
    })
}

function createSmallCard() {
    let div = document.createElement('button')
    div.classList.add('ui')
    div.classList.add('mini')
    div.classList.add('circular')
    div.classList.add('button')
    return div
}

function changeCurrentKey(name, mode) {
    currentKey = keys.find(key => {
        return key.name === name && key.mode === mode
    })
    while (cardHolder.firstChild) {
        cardHolder.removeChild(cardHolder.firstChild);
    }
    displayCurrentKey()
}

function displayCurrentKey() {
    let div = document.createElement('div')
    div.classList.add('ui')
    div.classList.add('mini')
    div.classList.add('circular')
    div.classList.add('segment')
    div.textContent = `${currentKey.name} ${currentKey.mode}`
    removeKeyDisplay()
    sidebar.appendChild(div)
}

function removeKeyDisplay() {
    let old = document.querySelector('.ui.mini.circular.segment')
    old ?
        sidebar.removeChild(old) :
        undefined
}

function openSettings() {
    console.log("settings")
}