let previousKey = undefined
let currentKey = undefined
let currentPhrase = []

const recommendations = {
    undefined: () => fromTonic(),
    tonic: () => fromTonic(),
    supertonic: () => fromSupertonic(),
    mediant: () => fromMediant(),
    subdominant: () => fromSubdominant(),
    dominant: () => fromDominant(),
    submediant: () => fromSubmediant(),
    leadingtone: () => fromLeadingtone()
}

function processRecommendations() {
    if (previousKey && previousKey !== currentKey) {
        processModulationRecommendations()
    } else {
        recommendations[findChordsFunction(prevChord())]()
    }
}

function processModulationRecommendations() {
    console.log("Modulation path coming soon")
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

function prevChord() {
    return currentPhrase.slice(-1)[0]
}

function findChordsFunction(chord) {
    return Object.keys(currentKey).find(key => currentKey[key] === chord)
}