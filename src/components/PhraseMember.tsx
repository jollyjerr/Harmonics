import { Button, Card, CardContent, Typography, createStyles, makeStyles } from "@material-ui/core";

import { ChordInstance } from "../assets/objects";
import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            width: 250,
            padding: "1rem",
            margin: "1rem",
        },
    }),
);

interface TProps {
    chord: ChordInstance;
    currentPhrase: ChordInstance[];
    setCurrentPhrase: Function;
}

export const PhraseMember = ({ chord, currentPhrase, setCurrentPhrase }: TProps) => {
    const classes = useStyles();

    const removeChord = (chord: ChordInstance): void => {
        setCurrentPhrase(currentPhrase.filter(phraseMember => phraseMember.id !== chord.id));
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h4">{chord.name}</Typography>
                <Typography variant="h2">{chord.type}</Typography>
                <Button color="secondary" onClick={() => removeChord(chord)} size="small">
                    Remove
                </Button>
            </CardContent>
        </Card>
    );
};

export default PhraseMember;
