import { Box, Button, ButtonBase, Grid, Paper, Typography, createStyles, makeStyles } from "@material-ui/core";
import { chords, keys } from "../assets/data";

import Card from "@material-ui/core/Card";
import { Key } from "../assets/objects";
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
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container justify="center" spacing={1}>
                {selectedKey.chords().map((chord, i) => (
                    <ButtonBase key={i} className={classes.card}>
                        <Typography variant="h2">{chord.name}</Typography>
                        <Typography>{chord.type}</Typography>
                    </ButtonBase>
                ))}
            </Grid>
        </Box>
    );
};

export default ComposingTable;
