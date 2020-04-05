import ComposingTable from "./ComposingTable";
import { Key } from "../assets/objects";
import Navbar from "./Navbar";
import React from "react";
import { Shell } from "../assets/styles";
import homeStyles from "../theme/homeStyles";
import { keys } from "../assets/data";

const Home = () => {
    const classes = homeStyles();
    const [selectedKey, selectKey] = React.useState<Key>(keys[0]);
    return (
        <Shell className={classes.shell}>
            <Navbar selectKey={selectKey} />
            <ComposingTable selectedKey={selectedKey} />
        </Shell>
    );
};

export default Home;
