// controllers
function initializeModulation() {
    if (!cardHolder.firstChild) {
        let options = allChordsFrom(currentKey)
        if (modalBorrowing) {
            options = options.concat(allChordsFrom(currentKey.parallel))
        }
        renderChordCards(options)
    }
}

function catchTonic() {
    renderBasics([currentKey.subdominant, currentKey.dominant, currentKey.leadingtone])
    renderParallel([])
    previousKey = currentKey
}

function catchSupertonic() {
    renderBasics([currentKey.dominant])
    renderParallel([])
    previousKey = currentKey
}

function catchMediant() {
    renderBasics([currentKey.supertonic, currentKey.subdominant])
    previousKey = currentKey
}

function catchSubdominant() {
    renderBasics([currentKey.dominant, currentKey.leadingtone])
    renderParallel([])
    previousKey = currentKey
}

function catchDominant() {
    renderBasics([currentKey.tonic, currentKey.submediant])
    previousKey = currentKey
}

function catchSubmediant() {
    renderBasics([currentKey.dominant])
    previousKey = currentKey
}

function catchLeadingtone() {
    renderBasics([currentKey.submediant, currentKey.tonic])
    previousKey = currentKey
}


//
//renderers