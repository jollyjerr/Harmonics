import React from 'react'
import { WorkspaceProps } from '../assets/types'

import './styles/workspace.scss';

import ChordCard from './children/ChordCard';
import { keys } from '../assets/data';
import KeyCard from './children/KeyCard';

const Workspace = ({
    phrase, 
    addChord, 
    removeChord, 
    changeKey,
    currentKey, 
    isChangingKey
    }: WorkspaceProps) => {

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

    const keyOptions = () => {
        return keys.map((key, i) => {
            return <KeyCard key={i} musicalKey={key} action={changeKey} />
        })
    }

    return (
        <div className="workspace">
            <section className="options">
                { 
                    isChangingKey ? 
                    keyOptions()  :
                    chordOptions()
                }
            </section>
            <section className="display">
                {phraseCards()}
            </section>
        </div>
    );
}

export default Workspace;
