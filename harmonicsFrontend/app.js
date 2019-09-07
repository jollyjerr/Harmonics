let previousKey = undefined
let currentKey = undefined
let currentPhrase = []

function processRecommendations() {
    if (previousKey && previousKey !== currentKey) {
        processModulationRecommendations()
    } else {
        processTonalRecommendations()
    }
}

function processModulationRecommendations() {
    console.log("Modulation path coming soon")
}

function processTonalRecommendations() {
    console.log("just use the V chord")
}

function changeCurrentKey(name, mode) {
    previousKey = currentKey
    currentKey = keys.find(key => {
        return key.name === name && key.mode === mode
    })
    removeCardHolderCards()
    displayCurrentKey()
    processRecommendations()
}

function addChord(chord) {
    let div = createMedButton()
    div.textContent = `${chord.name} ${chord.type}`
    div.addEventListener('click', () => removeChord(event, chord))
    score.appendChild(div)
    currentPhrase.push(chord)
    processRecommendations()
}

function removeChord(event, sadChord) {
    currentPhrase = currentPhrase.filter(chord => chord !== sadChord)
    event.target.remove()
    processRecommendations()
}