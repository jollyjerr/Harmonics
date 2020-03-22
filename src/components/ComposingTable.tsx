import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: "64px",
            marginLeft: -240,
        },
    }),
);

const ComposingTable = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>This is where music will go</div>
        </>
    );
};

export default ComposingTable;
