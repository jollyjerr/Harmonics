import { ButtonBase, Grid, Typography, createStyles, makeStyles } from "@material-ui/core";
import { Chord, ChordInstance, Key } from "../assets/objects";

import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: "65px",
            marginLeft: -240,
            height: "calc(100vh - 70px)",
            flexGrow: 1,
        },
        card: {
            minWidth: 100,
            padding: "1rem",
            margin: "1rem",
        },
    }),
);

interface Tprops {
    selectedKey: Key;
    currentPhrase: ChordInstance[];
    setCurrentPhrase: Function;
}

const ChordSelection = ({ selectedKey, currentPhrase, setCurrentPhrase }: Tprops) => {
    const [phraseId, increasePhraseId] = React.useState<number>(0);
    const classes = useStyles();

    const addChord = (chord: Chord): void => {
        const newChord = new ChordInstance(chord.name, chord.type, chord.sound, phraseId);
        setCurrentPhrase([...currentPhrase, newChord]);
        increasePhraseId(phraseId + 1);
    };

    return (
        <Grid container justify="center" spacing={1}>
            {selectedKey.chords().map((chord, i) => (
                <ButtonBase key={i} className={classes.card} onClick={() => addChord(chord)}>
                    <Typography variant="h2">{chord.name}</Typography>
                    <Typography>{chord.type}</Typography>
                </ButtonBase>
            ))}
        </Grid>
    );
};

export default ChordSelection;
