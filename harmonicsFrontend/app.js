let previousKey = undefined
let currentKey = undefined
let currentPhrase = []

const recommendations = {
    modulation: {
        Major: {

        },
        minor: {

        }
    },
    tonal: {
        Major: {
            undefined: fromTonic,
            tonic: fromTonic,
            supertonic: fromSupertonic,
            mediant: fromMediant,
            subdominant: fromSubdominant,
            dominant: fromDominant,
            submediant: fromSubmediant,
            leadingtone: fromLeadingtone
        },
        minor: {
            undefined: fromTonic,
            tonic: fromTonic,
            supertonic: fromSupertonic,
            mediant: fromMediant,
            subdominant: fromSubdominant,
            dominant: fromDominant,
            submediant: fromSubmediant,
            leadingtone: fromLeadingtone
        }
    }
}

function processRecommendations() {
    clearRecommendations()
    if (previousKey && previousKey !== currentKey) {
        recommendations['modulation'][currentKey.mode][findChordsFunction(prevChord())]()
    } else {
        recommendations['tonal'][currentKey.mode][findChordsFunction(prevChord())]()
    }
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
    return Object.keys(currentKey).find(objectKey => currentKey[objectKey] === chord)
}

function clearRecommendations() {
    cardHolder.childNodes.forEach(node => {
        node.classList.remove('positive')
    })
}

function chordText(chord) {
    return `${chord.name} ${chord.type}`
}

function convertChordsToText(chordsArr) {
    return chordsArr.map(chord => {
        return chordText(chord)
    })
}

function grabNodesFromChords(chordsArr) {
    return Array.from(cardHolder.childNodes).filter(chord => chordsArr.includes(chord.textContent))
}