import React from "react";

import {Chord, ChordCardProps} from '../../assets/types';

const ChordCard = ({chord, action}: ChordCardProps) => {
  return (
    <div 
        className="chord-card"
        onClick={() => action(chord)}
    >
        <h1>{chord.name}</h1>
        <h2>{chord.type}</h2>
    </div>
  );
};

export default ChordCard;
