import { Box, Button, ButtonBase, Grid, Paper, Typography, createStyles, makeStyles } from "@material-ui/core";
import { Chord, ChordInstance, Key } from "../assets/objects";
import { chords, keys } from "../assets/data";

import Card from "@material-ui/core/Card";
import ChordSelection from "./ChordSelection";
import PhraseMember from "./PhraseMember";
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
}

const ComposingTable = ({ selectedKey }: Tprops) => {
    const [currentPhrase, setCurrentPhrase] = React.useState<ChordInstance[]>([]);
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <ChordSelection
                selectedKey={selectedKey}
                currentPhrase={currentPhrase}
                setCurrentPhrase={setCurrentPhrase}
            />
            <Grid container spacing={3}>
                {currentPhrase?.map(chord => (
                    <PhraseMember chord={chord} />
                ))}
            </Grid>
        </Box>
    );
};

export default ComposingTable;
