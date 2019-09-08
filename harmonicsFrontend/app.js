let previousKey = undefined;
let currentKey = undefined;
let currentPhrase = [];

const recommendations = {
    modulation: {
        Major: {
            undefined: initializeModulation,
            tonic: catchTonic,
            supertonic: catchSupertonic,
            mediant: catchMediant,
            subdominant: catchSubdominant,
            dominant: catchDominant,
            submediant: catchSubmediant,
            leadingtone: catchLeadingtone
        },
        minor: {
            undefined: initializeModulation,
            tonic: catchTonic,
            supertonic: catchSupertonic,
            mediant: catchMediant,
            subdominant: catchSubdominant,
            dominant: catchDominant,
            submediant: catchSubmediant,
            leadingtone: catchLeadingtone
        }
    },
    tonal: {
        Major: {
            undefined: initializeChordSelection,
            tonic: fromTonic,
            supertonic: fromSupertonic,
            mediant: fromMediant,
            subdominant: fromSubdominant,
            dominant: fromDominant,
            submediant: fromSubmediant,
            leadingtone: fromLeadingtone
        },
        minor: {
            undefined: initializeChordSelection,
            tonic: fromTonic,
            supertonic: fromSupertonic,
            mediant: fromMediant,
            subdominant: fromSubdominant,
            dominant: fromDominant,
            submediant: fromSubmediant,
            leadingtone: fromLeadingtoneMinor
        }
    }
}

function processRecommendations() {
    console.log(findChordsFunction(prevChord()))
    clearRecommendations()
    if (previousKey && previousKey !== currentKey) {
        recommendations['modulation'][currentTonalState()][findChordsFunction(prevChord())]()
    } else {
        recommendations['tonal'][currentTonalState()][findChordsFunction(prevChord())]()
    }
}

function changeCurrentKey(name, mode) {
    previousKey = currentKey
    currentKey = keys.find(key => {
        return key.name === name && key.mode === mode
    })
    establishKeyRelationships()
    clearChordMenu()
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
    return Object.keys(currentKey).find(objectKey => currentKey[objectKey] === chord) ?
        Object.keys(currentKey).find(objectKey => currentKey[objectKey] === chord) :
        Object.keys(currentKey.parallel).find(objectKey => currentKey.parallel[objectKey] === chord)
}

function clearRecommendations() {
    cardHolder.childNodes.forEach(node => {
        node.classList.remove('positive')
        node.classList.remove('yellow')
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

function establishKeyRelationships() {
    if (!currentKey.parallel) {
        let desiredMode = currentKey.mode === "Major" ? "minor" : "Major"
        currentKey.setParallel(keys.filter(key => key.name === currentKey.name && key.mode === desiredMode)[0])
    }
}

function allChordsFrom(key) {
    let chordNames = Object.keys(key).slice(2, 9)
    return chordNames.map(chord => {
        return key[chord]
    })
}

function currentTonalState() {
    return prevChord() ? diminishedFilter(prevChord()) : currentKey.mode
}

function diminishedFilter(chord) {
    return chord.type === "diminished" ? currentKey.mode : chord.type
}