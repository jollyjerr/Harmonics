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
}

const craftChord = (name, type, sound) => {
    return new Chord(name, type, sound)
}

const allChordInfo = [
    ["C", "Major", "sounds/CMajor.m4a"],
    ["C", "Minor", "sounds/CMinor.m4a"],
    ["C", "Diminished", "sounds/Cdim.m4a"],
    ["B#", "Major", "sounds/CMajor.m4a"],
    ["B#", "Minor", "sounds/CMinor.m4a"],
    ["B#", "Diminished", "sounds/Cdim.m4a"],
    ["Dbb", "Major", "sounds/CMajor.m4a"],
    ["Dbb", "Minor", "sounds/CMinor.m4a"],
    ["Dbb", "Diminished", "sounds/Cdim.m4a"],
    ["C#", "Major", "sounds/C#Major.m4a"],
    ["C#", "Minor", "sounds/C#Minor.m4a"],
    ["C#", "Diminished", "sounds/C#dim.m4a"],
    ["Db", "Major", "sounds/C#Major.m4a"],
    ["Db", "Minor", "sounds/C#Minor.m4a"],
    ["Db", "Diminished", "sounds/C#dim.m4a"],
    ["D", "Major", "sounds/DMajor.m4a"],
    ["D", "Minor", "sounds/DMinor.m4a"],
    ["D", "Diminished", "sounds/Ddim.m4a"],
    ["C##", "Major", "sounds/DMajor.m4a"],
    ["C##", "Minor", "sounds/DMinor.m4a"],
    ["C##", "Diminished", "sounds/Ddim.m4a"],
    ["Ebb", "Major", "sounds/DMajor.m4a"],
    ["Ebb", "Minor", "sounds/DMinor.m4a"],
    ["Ebb", "Diminished", "sounds/Ddim.m4a"],
    ["D#", "Major", "sounds/D#Major.m4a"],
    ["D#", "Minor", "sounds/D#Minor.m4a"],
    ["D#", "Diminished", "sounds/D#dim.m4a"],
    ["Eb", "Major", "sounds/D#Major.m4a"],
    ["Eb", "Minor", "sounds/D#Minor.m4a"],
    ["Eb", "Diminished", "sounds/D#dim.m4a"],
    ["E", "Major", "sounds/EMajor.m4a"],
    ["E", "Minor", "sounds/EMinor.m4a"],
    ["E", "Diminished", "sounds/Edim.m4a"],
    ["Fb", "Major", "sounds/EMajor.m4a"],
    ["Fb", "Minor", "sounds/EMinor.m4a"],
    ["Fb", "Diminished", "sounds/Edim.m4a"],
    ["D##", "Major", "sounds/EMajor.m4a"],
    ["D##", "Minor", "sounds/EMinor.m4a"],
    ["D##", "Diminished", "sounds/Edim.m4a"],
    ["F", "Major", "sounds/FMajor.m4a"],
    ["F", "Minor", "sounds/FMinor.m4a"],
    ["F", "Diminished", "sounds/Fdim.m4a"],
    ["E#", "Major", "sounds/FMajor.m4a"],
    ["E#", "Minor", "sounds/FMinor.m4a"],
    ["E#", "Diminished", "sounds/Fdim.m4a"],
    ["Gbb", "Major", "sounds/FMajor.m4a"],
    ["Gbb", "Minor", "sounds/FMinor.m4a"],
    ["Gbb", "Diminished", "sounds/Fdim.m4a"],
    ["F#", "Major", "sounds/F#Major.m4a"],
    ["F#", "Minor", "sounds/F#Minor.m4a"],
    ["F#", "Diminished", "sounds/F#dim.m4a"],
    ["Gb", "Major", "sounds/F#Major.m4a"],
    ["Gb", "Minor", "sounds/F#Minor.m4a"],
    ["Gb", "Diminished", "sounds/F#dim.m4a"],
    ["G", "Major", "sounds/GMajor.m4a"],
    ["G", "Minor", "sounds/GMinor.m4a"],
    ["G", "Diminished", "sounds/Gdim.m4a"],
    ["F##", "Major", "sounds/GMajor.m4a"],
    ["F##", "Minor", "sounds/GMinor.m4a"],
    ["F##", "Diminished", "sounds/Gdim.m4a"],
    ["Abb", "Major", "sounds/GMajor.m4a"],
    ["Abb", "Minor", "sounds/GMinor.m4a"],
    ["Abb", "Diminished", "sounds/Gdim.m4a"],
    ["G#", "Major", "sounds/G#Major.m4a"],
    ["G#", "Minor", "sounds/G#Minor.m4a"],
    ["G#", "Diminished", "sounds/G#dim.m4a"],
    ["Ab", "Major", "sounds/G#Major.m4a"],
    ["Ab", "Minor", "sounds/G#Minor.m4a"],
    ["Ab", "Diminished", "sounds/G#dim.m4a"],
    ["A", "Major", "sounds/AMajor.m4a"],
    ["A", "Minor", "sounds/AMinor.m4a"],
    ["A", "Diminished", "sounds/Adim.m4a"],
    ["G##", "Major", "sounds/AMajor.m4a"],
    ["G##", "Minor", "sounds/AMinor.m4a"],
    ["G##", "Diminished", "sounds/Adim.m4a"],
    ["Bbb", "Major", "sounds/AMajor.m4a"],
    ["Bbb", "Minor", "sounds/AMinor.m4a"],
    ["Bbb", "Diminished", "sounds/Adim.m4a"],
    ["A#", "Major", "sounds/A#Major.m4a"],
    ["A#", "Minor", "sounds/A#Minor.m4a"],
    ["A#", "Diminished", "sounds/A#dim.m4a"],
    ["Bb", "Major", "sounds/A#Major.m4a"],
    ["Bb", "Minor", "sounds/A#Minor.m4a"],
    ["Bb", "Diminished", "sounds/A#dim.m4a"],
    ["B", "Major", "sounds/BMajor.m4a"],
    ["B", "Minor", "sounds/BMinor.m4a"],
    ["B", "Diminished", "sounds/BDim.m4a"],
    ["Cb", "Major", "sounds/BMajor.m4a"],
    ["Cb", "Minor", "sounds/BMinor.m4a"],
    ["Cb", "Diminished", "sounds/BDim.m4a"],
    ["A##", "Major", "sounds/BMajor.m4a"],
    ["A##", "Minor", "sounds/BMinor.m4a"],
    ["A##", "Diminished", "sounds/BDim.m4a"]
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
    ["C", "Minor", Cm, Ddim, EBM, Fm, Gm, ABM, BBM],
    ["C#", "Minor", CSm, DSdim, EM, FSm, GSm, AM, BM],
    ["D", "Minor", Dm, Edim, FM, Gm, Am, BBM, CM],
    ["Eb", "Minor", EBm, Fdim, GBM, ABm, BBm, CBM, DBM],
    ["E", "Minor", Em, FSdim, GM, Am, Bm, CM, DM],
    ["F", "Minor", Fm, Gdim, ABM, BBm, Cm, DM, EBM],
    ["F#", "Minor", FSm, GSdim, AM, Bm, CSm, DM, EM],
    ["G", "Minor", Gm, Adim, BBM, Cm, Dm, EBM, FM],
    ["G#", "Minor", GSm, ASdim, BM, CSm, DSm, EM, FSM],
    ["Ab", "Minor", ABm, BBdim, CBM, DBm, EBm, FBM, GBM],
    ["A", "Minor", Am, Bdim, CM, Dm, Em, FM, GM],
    ["A#", "Minor", ASm, BSdim, CSM, DSm, ESm, FSM, GSM],
    ["Bb", "Minor", BBm, Cdim, DBM, EBm, Fm, GBM, ABM],
    ["B", "Minor", Bm, CSdim, DM, Em, FSm, GM, AM]
];

const craftKeys = (keyInfo) => {
    return keyInfo.map(key => {
        return craftKey.apply(this, key);
    })
}

let keys = craftKeys(allKeyInfo);