// controllers
function initializeModulation() {
    if (!cardHolder.firstChild) {
        let options = allChordsFrom(currentKey)
        if (modalBorrowing) {
            options = options.concat(allChordsFrom(currentKey.parallel))
        }
        renderChordCards(options)
    }
    catchTonic()
}

function catchTonic() {
    renderBasics([currentKey.tonic, currentKey.supertonic, currentKey.mediant, currentKey.subdominant, currentKey.dominant, currentKey.submediant, currentKey.leadingtone])
    renderParallel([currentKey.parallel.tonic, currentKey.parallel.subdominant, currentKey.parallel.mediant, currentKey.parallel.submediant])
}

function catchSupertonic() {
    renderBasics([currentKey.dominant, currentKey.leadingtone])
    renderParallel([currentKey.parallel.submediant])
}

function catchMediant() {
    renderBasics([currentKey.submediant])
}

function catchSubdominant() {
    renderBasics([currentKey.dominant, currentKey.leadingtone])
    renderParallel([currentKey.parallel.submediant])
}

function catchDominant() {
    renderBasics([currentKey.tonic, currentKey.submediant])
}

function catchSubmediant() {
    renderBasics([currentKey.supertonic, currentKey.dominant, currentKey.subdominant])
}

function catchLeadingtone() {
    renderBasics([currentKey.mediant, currentKey.tonic])
}


//
//renderers