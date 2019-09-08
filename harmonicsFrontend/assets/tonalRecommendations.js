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
    renderParallel([currentKey.parallel.subdominant])
}

function fromSupertonic() {
    renderBasics([currentKey.dominant, currentKey.leadingtone])
}

function fromMediant() {
    renderBasics([currentKey.submediant])
}

function fromSubdominant() {
    renderBasics([currentKey.dominant, currentKey.leadingtone])
}

function fromDominant() {
    renderBasics([currentKey.tonic])
}

function fromSubmediant() {
    renderBasics([currentKey.supertonic, currentKey.subdominant])
}

function fromLeadingtone() {
    renderBasics([currentKey.mediant])
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