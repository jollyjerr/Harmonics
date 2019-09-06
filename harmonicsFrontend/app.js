const cardHolder = document.querySelector('#card_holder')
const sidebarButton = document.querySelector('nav button')
const sidebar = document.querySelector('#sidebar_container')

let currentKey = undefined


//event listners
sidebar.addEventListener('click', () => sidebarEvents(event))

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
    } else {
        console.warn("event failed")
    }
}




//functions

function pickKey() {
    console.log("key")
}

function openSettings() {
    console.log("settings")
}