const cardHolder = document.querySelector('#card_holder')
const sidebarButton = document.querySelector('nav button')
const sidebar = document.querySelector('#sidebar')

let isSideVisable = false
let currentKey = undefined


//event listners
sidebarButton.addEventListener('click', toggleSidebar)
sidebar.addEventListener('click', () => sidebarEvents(event))



//functions

function renderChords() {

}

function pickKey() {
    console.log("key")
}

function openSettings() {
    console.log("settings")
}

function sidebarEvents(event) {
    if (event.target.classList.contains('item')) {
        switch (event.target.textContent) {
            case "Key":
                pickKey()
                break;
            case "Settings":
                openSettings()
                break;
        }
        toggleSidebar()
    } else {
        toggleSidebar()
    }
}

function toggleSidebar() {
    isSideVisable = !isSideVisable
    isSideVisable ?
        sidebar.setAttribute('style', 'display: block;') :
        sidebar.setAttribute('style', 'display: none;')
}