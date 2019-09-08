function fromTonic() {
    cardHolder.childNodes.forEach(node => {
        node.classList.add('positive')
    })
}

function fromSupertonic() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromMediant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.submediant]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromSubdominant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromDominant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.tonic]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromSubmediant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.supertonic, currentKey.subdominant]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromLeadingtone() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.mediant]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}