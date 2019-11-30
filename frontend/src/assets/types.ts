export class Chord {
    name: string;
    type: string;
    sound: string;

    constructor(name: string, type: string, sound: string) {
        this.name = name;
        this.type = type;
        this.sound = sound;
    }
}

export class ChordInstance {
  name: string;
  type: string;
  sound: string;
  id: number;

  constructor(name: string, type: string, sound: string, id: number) {
    this.name = name;
    this.type = type;
    this.sound = sound;
    this.id = id;
  }
}

export class Key {
    name: string;
    mode: string;
    tonic: Chord;
    supertonic: Chord;
    mediant: Chord;
    subdominant: Chord;
    dominant: Chord;
    submediant: Chord;
    leadingtone: Chord;
    parallel: Key | undefined;

  constructor(
    name: string,
    mode: string,
    tonic: Chord,
    supertonic: Chord,
    mediant: Chord,
    subdominant: Chord,
    dominant: Chord,
    submediant: Chord,
    leadingtone: Chord
  ) {
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
  setParallel(key: Key) {
    this.parallel = key;
  }
}

export type State = {
  phrase: ChordInstance[],
  key: Key,
  prevKey: any,
  isChangingKey: boolean
}

export type WorkspaceProps = {
  phrase: Chord[],
  addChord: Function,
  removeChord: Function,
  changeKey: Function,
  currentKey: Key,
  isChangingKey: boolean
}

export type ChordCardProps = {
  key: number,
  chord: Chord,
  action: Function
}

export type KeyCardProps = {
  key: number,
  musicalKey: Key,
  action: Function
}

export type ToolbarProps = {
  toggleKeyMenu: Function,
  musicalKey: Key
}