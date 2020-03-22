import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import homeStyles from "../theme/homeStyles";

const Navbar = () => {
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
                    <IconButton onClick={() => setOpen(!open)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
            </Drawer>
        </>
    );
};

export default Navbar;
