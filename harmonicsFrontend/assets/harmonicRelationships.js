const sharpChromaticCircle = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const flatChromaticCircle = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
class Chord {
    constructor(name, type, sound) {
        this.name = name;
        this.type = type;
        this.sound = sound;
    }
}
class Key {
    constructor(name, mode, tonic, supertonic, mediant, subdominant, dominant, submediant, leadingtone) {
        this.name = name;
        this.mode = mode;
        this.tonic = tonic;
        this.supertonic = supertonic;
        this.mediant = mediant;
        this.subdominant = subdominant;
        this.dominant = dominant;
        this.submediant = submediant;
        this.leadingtone = leadingtone;
    }
    setParallel(key) {
        this.parallel = key
    }
}

const craftChord = (name, type, sound) => {
    return new Chord(name, type, sound)
}

const allChordInfo = [
    ["C", "Major", "sounds/CMajor.mp3"],
    ["C", "minor", "sounds/CMinor.mp3"],
    ["C", "diminished", "sounds/Cdim.mp3"],
    ["B#", "Major", "sounds/CMajor.mp3"],
    ["B#", "minor", "sounds/CMinor.mp3"],
    ["B#", "diminished", "sounds/Cdim.mp3"],
    ["Dbb", "Major", "sounds/CMajor.mp3"],
    ["Dbb", "minor", "sounds/CMinor.mp3"],
    ["Dbb", "diminished", "sounds/Cdim.mp3"],
    ["C#", "Major", "sounds/C#Major.mp3"],
    ["C#", "minor", "sounds/C#Minor.mp3"],
    ["C#", "diminished", "sounds/C#dim.mp3"],
    ["Db", "Major", "sounds/C#Major.mp3"],
    ["Db", "minor", "sounds/C#Minor.mp3"],
    ["Db", "diminished", "sounds/C#dim.mp3"],
    ["D", "Major", "sounds/DMajor.mp3"],
    ["D", "minor", "sounds/DMinor.mp3"],
    ["D", "diminished", "sounds/Ddim.mp3"],
    ["C##", "Major", "sounds/DMajor.mp3"],
    ["C##", "minor", "sounds/DMinor.mp3"],
    ["C##", "diminished", "sounds/Ddim.mp3"],
    ["Ebb", "Major", "sounds/DMajor.mp3"],
    ["Ebb", "minor", "sounds/DMinor.mp3"],
    ["Ebb", "diminished", "sounds/Ddim.mp3"],
    ["D#", "Major", "sounds/D#Major.mp3"],
    ["D#", "minor", "sounds/D#Minor.mp3"],
    ["D#", "diminished", "sounds/D#dim.mp3"],
    ["Eb", "Major", "sounds/D#Major.mp3"],
    ["Eb", "minor", "sounds/D#Minor.mp3"],
    ["Eb", "diminished", "sounds/D#dim.mp3"],
    ["E", "Major", "sounds/EMajor.mp3"],
    ["E", "minor", "sounds/EMinor.mp3"],
    ["E", "diminished", "sounds/Edim.mp3"],
    ["Fb", "Major", "sounds/EMajor.mp3"],
    ["Fb", "minor", "sounds/EMinor.mp3"],
    ["Fb", "diminished", "sounds/Edim.mp3"],
    ["D##", "Major", "sounds/EMajor.mp3"],
    ["D##", "minor", "sounds/EMinor.mp3"],
    ["D##", "diminished", "sounds/Edim.mp3"],
    ["F", "Major", "sounds/FMajor.mp3"],
    ["F", "minor", "sounds/FMinor.mp3"],
    ["F", "diminished", "sounds/Fdim.mp3"],
    ["E#", "Major", "sounds/FMajor.mp3"],
    ["E#", "minor", "sounds/FMinor.mp3"],
    ["E#", "diminished", "sounds/Fdim.mp3"],
    ["Gbb", "Major", "sounds/FMajor.mp3"],
    ["Gbb", "minor", "sounds/FMinor.mp3"],
    ["Gbb", "diminished", "sounds/Fdim.mp3"],
    ["F#", "Major", "sounds/F#Major.mp3"],
    ["F#", "minor", "sounds/F#Minor.mp3"],
    ["F#", "diminished", "sounds/F#dim.mp3"],
    ["Gb", "Major", "sounds/F#Major.mp3"],
    ["Gb", "minor", "sounds/F#Minor.mp3"],
    ["Gb", "diminished", "sounds/F#dim.mp3"],
    ["G", "Major", "sounds/GMajor.mp3"],
    ["G", "minor", "sounds/GMinor.mp3"],
    ["G", "diminished", "sounds/Gdim.mp3"],
    ["F##", "Major", "sounds/GMajor.mp3"],
    ["F##", "minor", "sounds/GMinor.mp3"],
    ["F##", "diminished", "sounds/Gdim.mp3"],
    ["Abb", "Major", "sounds/GMajor.mp3"],
    ["Abb", "minor", "sounds/GMinor.mp3"],
    ["Abb", "diminished", "sounds/Gdim.mp3"],
    ["G#", "Major", "sounds/G#Major.mp3"],
    ["G#", "minor", "sounds/G#Minor.mp3"],
    ["G#", "diminished", "sounds/G#dim.mp3"],
    ["Ab", "Major", "sounds/G#Major.mp3"],
    ["Ab", "minor", "sounds/G#Minor.mp3"],
    ["Ab", "diminished", "sounds/G#dim.mp3"],
    ["A", "Major", "sounds/AMajor.mp3"],
    ["A", "minor", "sounds/AMinor.mp3"],
    ["A", "diminished", "sounds/Adim.mp3"],
    ["G##", "Major", "sounds/AMajor.mp3"],
    ["G##", "minor", "sounds/AMinor.mp3"],
    ["G##", "diminished", "sounds/Adim.mp3"],
    ["Bbb", "Major", "sounds/AMajor.mp3"],
    ["Bbb", "minor", "sounds/AMinor.mp3"],
    ["Bbb", "diminished", "sounds/Adim.mp3"],
    ["A#", "Major", "sounds/A#Major.mp3"],
    ["A#", "minor", "sounds/A#Minor.mp3"],
    ["A#", "diminished", "sounds/A#dim.mp3"],
    ["Bb", "Major", "sounds/A#Major.mp3"],
    ["Bb", "minor", "sounds/A#Minor.mp3"],
    ["Bb", "diminished", "sounds/A#dim.mp3"],
    ["B", "Major", "sounds/BMajor.mp3"],
    ["B", "minor", "sounds/BMinor.mp3"],
    ["B", "diminished", "sounds/BDim.mp3"],
    ["Cb", "Major", "sounds/BMajor.mp3"],
    ["Cb", "minor", "sounds/BMinor.mp3"],
    ["Cb", "diminished", "sounds/BDim.mp3"],
    ["A##", "Major", "sounds/BMajor.mp3"],
    ["A##", "minor", "sounds/BMinor.mp3"],
    ["A##", "diminished", "sounds/BDim.mp3"]
];

const craftChords = (chordInfo) => {
    return chordInfo.map(chord => {
        return craftChord.apply(this, chord);
    })
}

let chords = craftChords(allChordInfo);

const [CM, Cm, Cdim, BSM, BSm, BSdim, DDBM, DDBm, DDBdim, CSM, CSm, CSdim, DBM, DBm, DBdim, DM, Dm, Ddim, CDSM, CDSm, CDSdim, EDBM, EDBm, EDBdim, DSM, DSm, DSdim, EBM, EBm, EBdim, EM, Em, Edim, FBM, FBm, FBdim, DDSM, DDSm, DDSdim, FM, Fm, Fdim, ESM, ESm, ESdim, GDBM, GDBm, GDBdim, FSM, FSm, FSdim, GBM, GBm, GBdim, GM, Gm, Gdim, FDSM, FDSm, FDSdim, ADBM, ADBm, ADBdim, GSM, GSm, GSdim, ABM, ABm, ABdim, AM, Am, Adim, GDSM, GDSm, GDSdim, BDBM, BDBm, BDBdim, ASM, ASm, ASdim, BBM, BBm, BBdim, BM, Bm, Bdim, CBM, CBm, CBdim, ADSM, ADSm, ADSdim] = chords;

const craftKey = (name, mode, tonic, supertonic, mediant, subdominant, dominant, submediant, leadingtone) => {
    return new Key(name, mode, tonic, supertonic, mediant, subdominant, dominant, submediant, leadingtone)
}

const allKeyInfo = [
    ["C", "Major", CM, Dm, Em, FM, GM, Am, Bdim],
    ["C#", "Major", CSM, DSm, ESm, FSM, GSM, ASm, BSdim],
    ["Db", "Major", DBM, EBm, Fm, GBM, ABM, BBm, Cdim],
    ["D", "Major", DM, Em, FSm, GM, AM, Bm, CSdim],
    ["Eb", "Major", EBM, Fm, Gm, ABM, BBM, Cm, Ddim],
    ["E", "Major", EM, FSm, GSm, AM, BM, CSm, DSdim],
    ["F", "Major", FM, Gm, Am, BBM, CM, Dm, Edim],
    ["F#", "Major", FSM, GSm, ASm, BM, CSM, DSm, ESdim],
    ["Gb", "Major", GBM, ABm, BBm, CBM, DBM, EBm, Fdim],
    ["G", "Major", GM, Am, Bm, CM, DM, Em, FSdim],
    ["Ab", "Major", ABM, BBm, Cm, DBM, EBM, Fm, Gdim],
    ["A", "Major", AM, Bm, CSm, DM, EM, FSm, GSdim],
    ["Bb", "Major", BBM, Cm, Dm, EBM, FM, Gm, Adim],
    ["B", "Major", BM, CSm, DSm, EM, FSM, GSm, ASdim],
    ["C", "minor", Cm, Ddim, EBM, Fm, Gm, ABM, BBM],
    ["C#", "minor", CSm, DSdim, EM, FSm, GSm, AM, BM],
    ["D", "minor", Dm, Edim, FM, Gm, Am, BBM, CM],
    ["Eb", "minor", EBm, Fdim, GBM, ABm, BBm, CBM, DBM],
    ["E", "minor", Em, FSdim, GM, Am, Bm, CM, DM],
    ["F", "minor", Fm, Gdim, ABM, BBm, Cm, DM, EBM],
    ["F#", "minor", FSm, GSdim, AM, Bm, CSm, DM, EM],
    ["G", "minor", Gm, Adim, BBM, Cm, Dm, EBM, FM],
    ["G#", "minor", GSm, ASdim, BM, CSm, DSm, EM, FSM],
    ["Ab", "minor", ABm, BBdim, CBM, DBm, EBm, FBM, GBM],
    ["A", "minor", Am, Bdim, CM, Dm, Em, FM, GM],
    ["A#", "minor", ASm, BSdim, CSM, DSm, ESm, FSM, GSM],
    ["Bb", "minor", BBm, Cdim, DBM, EBm, Fm, GBM, ABM],
    ["B", "minor", Bm, CSdim, DM, Em, FSm, GM, AM]
];

const craftKeys = (keyInfo) => {
    return keyInfo.map(key => {
        return craftKey.apply(this, key);
    })
}

let keys = craftKeys(allKeyInfo);