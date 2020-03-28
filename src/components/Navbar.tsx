import { AppBar, Button, Drawer, IconButton, Toolbar } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
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
                <div>
                    {keys.map(key => (
                        <Button key={(key.name, key.mode)} onClick={() => selectKey(key)}>
                            {key.name} {key.mode}
                        </Button>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Navbar;
