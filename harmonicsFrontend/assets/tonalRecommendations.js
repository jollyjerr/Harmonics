//controllers
function initializeChordSelection() {
    if (!cardHolder.firstChild) {
        let options = allChordsFrom(currentKey).concat(allChordsFrom(currentKey.parallel))
        renderChordCards(options)
    }
    fromTonic()
}

function fromTonic() {
    renderBasics([currentKey.tonic, currentKey.supertonic, currentKey.mediant, currentKey.subdominant, currentKey.dominant, currentKey.submediant, currentKey.leadingtone])
    renderParallel([currentKey.parallel.tonic, currentKey.parallel.subdominant, currentKey.parallel.mediant, currentKey.parallel.submediant])
}

function fromSupertonic() {
    renderBasics([currentKey.dominant, currentKey.leadingtone])
    renderParallel([currentKey.parallel.submediant])
}

function fromMediant() {
    renderBasics([currentKey.submediant])
}

function fromSubdominant() {
    renderBasics([currentKey.tonic, currentKey.dominant, currentKey.leadingtone])
    renderParallel([currentKey.parallel.submediant])
}

function fromDominant() {
    renderBasics([currentKey.tonic, currentKey.submediant])
}

function fromSubmediant() {
    renderBasics([currentKey.supertonic, currentKey.dominant, currentKey.subdominant])
}

function fromLeadingtone() {
    renderBasics([currentKey.mediant, currentKey.tonic])
}

function fromLeadingtoneMinor() {
    renderBasics([currentKey.mediant])
    renderParallel([currentKey.parallel.leadingtone])
}
//
//renderers
function renderChordCards(chordsArr) {
    chordsArr.map(chord => {
        renderBasicChordCard(chord)
    })
}

function renderBasics(chordsArr) {
    let recommendedCards = grabNodesFromChords(convertChordsToText(chordsArr))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function renderParallel(chordsArr) {
    let recommendedCards = grabNodesFromChords(convertChordsToText(chordsArr))
    recommendedCards.forEach(node => {
        node.classList.add('yellow')
    })
}