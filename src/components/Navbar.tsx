import { AppBar, ButtonBase, Drawer, ExpansionPanelSummary, Grid, IconButton, Toolbar } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import homeStyles from "../theme/homeStyles";
import { keys } from "../assets/data";

interface Tprops {
    selectKey: Function;
}

const Navbar = ({ selectKey }: Tprops) => {
    const classes = homeStyles();
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.navbar, {
                    [classes.navbarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        aria-label="menu"
                        onClick={() => setOpen(!open)}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        color="primary" 
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Harmonics
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.sidebar}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.sidebarPaper,
                }}
            >
                <div className={classes.sidebarHeader}>
                    <Typography variant="h2" style={{ marginRight: '5px' }}>Menu</Typography>
                    <IconButton color='primary' onClick={() => setOpen(!open)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <ExpansionPanel className={classes.expansionPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />} aria-controls="change-key">
                        <Typography>Change Key</Typography>
                    </ExpansionPanelSummary>
                    <Grid container className={classes.keyContainer}>
                        {keys.map((key, i) => (
                            <ButtonBase key={i} onClick={() => selectKey(key)} className={classes.keyButton}>
                                {key.name} {key.mode}
                            </ButtonBase>
                        ))}
                    </Grid>
                </ExpansionPanel>
            </Drawer>
        </>
    );
};

export default Navbar;
