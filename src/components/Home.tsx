import ComposingTable from "./ComposingTable";
import Navbar from "./Navbar";
import React from "react";
import { Shell } from "../assets/styles";
import homeStyles from "../theme/homeStyles";

const Home = () => {
    const classes = homeStyles();
    return (
        <Shell className={classes.shell}>
            <Navbar />
            <ComposingTable />
        </Shell>
    );
};

export default Home;
