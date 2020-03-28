import { Box, Grid, Paper, Typography, createStyles, makeStyles } from "@material-ui/core";
import { chords, keys } from "../assets/data";
import { Key } from "../assets/objects";
import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: "64px",
            marginLeft: -240,
        },
        paper: {
            height: 140,
            width: 100,
        },
    }),
);

interface Tprops {
    selectedKey: Key;
}

const ComposingTable = ({ selectedKey }: Tprops) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.root}>
                <Grid container justify="center" spacing={2}>
                    {selectedKey.chords().map(chord => (
                        <Paper key={chord.name} className={classes.paper}>
                            <Typography variant="h2">{chord.name}</Typography>
                            <Typography>{chord.type}</Typography>
                        </Paper>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default ComposingTable;
