function fromTonic() {
    cardHolder.childNodes.forEach(node => {
        node.classList.add('positive')
    })
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

function renderBasics(chordsArr) {
    let recommendedCards = grabNodesFromChords(convertChordsToText(chordsArr))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}