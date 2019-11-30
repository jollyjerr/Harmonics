import React from 'react';
import Toolbar from './Toolbar';

import './styles/main.scss'

import {keys, chords} from '../assets/data';
import {State, Chord, Key, ChordInstance} from '../assets/types';
import Workspace from './Workspace';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Toolbar
          toggleKeyMenu={this.toggleKeyMenu}
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

  chordCounter: number = 0;
  state: State = {
    phrase: [],
    key: keys[0],
    prevKey: undefined,
    isChangingKey: false
  };

  addChord = (chord: Chord): void => {
    this.chordCounter++
    let newChord = new ChordInstance(
      chord.name,
      chord.type,
      chord.sound,
      this.chordCounter
    );
    this.setState({
      phrase: [...this.state.phrase, newChord]
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

  changeKey = (key: Key): void => {
    this.setState({
      key: key,
      prevKey: this.state.key
    });
  };

}
