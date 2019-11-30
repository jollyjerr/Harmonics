import React from "react";

import { Key, KeyCardProps } from '../../assets/types';

const KeyCard = ({ musicalKey, action }: KeyCardProps) => {
    return (
        <div
            className="chord-card"
            onClick={() => action(musicalKey)}
        >
            <h1>{musicalKey.name}</h1>
            <h2>{musicalKey.mode}</h2>
        </div>
    );
};

export default KeyCard;