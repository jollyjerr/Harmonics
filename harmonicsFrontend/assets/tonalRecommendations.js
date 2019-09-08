const tonalHarmony = {

}


function fromTonic() {
    cardHolder.childNodes.forEach(node => {
        node.classList.add('positive')
    })
}

function fromSupertonic() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromMediant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromSubdominant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromDominant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromSubmediant() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}

function fromLeadingtone() {
    let recommendedCards = grabNodesFromChords(convertChordsToText([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone]))
    recommendedCards.forEach(node => {
        node.classList.add('positive')
    })
}