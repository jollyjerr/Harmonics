import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { colors } from "../assets/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const sidebarWidth = 240;

const homeStyles = makeStyles((theme: Theme) =>
    createStyles({
        shell: {
            display: "flex",
        },
        navbar: {
            backgroundColor: theme.palette.primary.dark,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        navbarShift: {
            backgroundColor: theme.palette.primary.dark,
            width: `calc(100% - ${sidebarWidth}px)`,
            marginLeft: sidebarWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
            // color: theme.palette.primary.main
        },
        expansionPanel: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
        },
        keyContainer: {
            flexGrow: 1,
            display: "flex",
            justifyContent: "space evenly",
            marginLeft: "15px",
        },
        keyButton: {
            width: "3rem",
            height: "3rem",
            padding: "0.5rem",
            margin: "0.5rem",
            fontSize: "large",
        },
        hide: {
            display: "none",
        },
        sidebar: {
            width: sidebarWidth,
            flexShrink: 0,
        },
        sidebarPaper: {
            backgroundColor: theme.palette.primary.dark,
            width: sidebarWidth,
        },
        sidebarHeader: {
            backgroundColor: theme.palette.primary.dark,
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        composingTable: {
            marginTop: sidebarWidth,
            backgroundColor: theme.palette.primary.light,
        },
    }),
);

export default homeStyles;
