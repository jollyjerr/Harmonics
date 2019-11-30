import React from 'react'
import { WorkspaceProps } from '../assets/types'

import './styles/workspace.scss';

import ChordCard from './children/chordCard';

const Workspace = ({phrase, addChord, removeChord, currentKey}: WorkspaceProps) => {

    const phraseCards = () => {
      return phrase.map((chord, i) => {
        return <ChordCard key={i} chord={chord} action={removeChord} />;
      });
    };

    const chordOptions = () => {
        let chords = new Array(
            currentKey.tonic,
            currentKey.supertonic,
            currentKey.mediant,
            currentKey.subdominant,
            currentKey.dominant,
            currentKey.submediant,
            currentKey.leadingtone
        );
        return chords.map((chord, i) => {
            return <ChordCard key={i} chord={chord} action={addChord} />
        })
    }

    return (
        <div className="workspace">
            <section className="options">
                {chordOptions()}
            </section>
            <section className="display">
                {phraseCards()}
            </section>
        </div>
    );
}

export default Workspace;
