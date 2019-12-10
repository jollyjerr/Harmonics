import React from 'react';
import {Howl, Howler} from 'howler'

import './styles/main.scss'

import {keys} from '../assets/data';
import {State, Chord, Key, ChordInstance} from '../assets/types';

import Workspace from './Workspace';
import Toolbar from './Toolbar';

export default class Main extends React.Component {
  render() {

    this.play(this.state.isPlayingAudio);

    return (
      <main>
        <Toolbar
          toggleKeyMenu={this.toggleKeyMenu}
          toggleAudioPlayback={this.toggleAudioPlayback}
          musicalKey={this.state.key}
        />
        <Workspace
          phrase={this.state.phrase}
          addChord={this.addChord} 
          removeChord={this.removeChord}
          changeKey={this.changeKey}
          currentKey={this.state.key}
          isChangingKey={this.state.isChangingKey}
        />
      </main>
    );
  }

  state: State = {
    phrase: [],
    key: keys[0],
    prevKey: undefined,
    isChangingKey: false,
    isPlayingAudio: false,
    chordCounter: 0
  };

  addChord = (chord: Chord): void => {
    let newChord = new ChordInstance(
      chord.name,
      chord.type,
      chord.sound,
      this.state.chordCounter
    );
    this.setState({
      phrase: [...this.state.phrase, newChord],
      chordCounter: this.state.chordCounter + 1
    });
  };

  removeChord = (chord: ChordInstance): void => {
    this.setState({
      phrase: this.state.phrase.filter(c => {
        return c.id !== chord.id
      })
    });
  }

  toggleKeyMenu = (): void => {
    this.setState({
      isChangingKey: !this.state.isChangingKey
    });
  }

  toggleAudioPlayback = (): void => {
    this.setState({
      isPlayingAudio: !this.state.isPlayingAudio
    })
  }

  audioSource = (): string[] => {
    return this.state.phrase.map(chord => {
      return chord.sound
    });
  }

  changeKey = (key: Key): void => {
    this.setState({
      key: key,
      prevKey: this.state.key
    });
  };

  play = (isPlaying: boolean): void => {
    if(!this.state.phrase[0]){
      return;
    }

    if (isPlaying) {
      var phrase = new Howl({
        src: this.state.phrase.map(c => c.sound)
      });
      phrase.play();
    }
  }

}
