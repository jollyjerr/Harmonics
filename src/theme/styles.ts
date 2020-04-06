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
            // backgroundColor: colors.dull,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        navbarShift: {
            // backgroundColor: colors.dull,
            width: `calc(100% - ${sidebarWidth}px)`,
            marginLeft: sidebarWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
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
            // backgroundColor: colors.dull,
            width: sidebarWidth,
        },
        sidebarHeader: {
            // backgroundColor: colors.dull,
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        composingTable: {
            marginTop: sidebarWidth,
            // backgroundColor: colors.pop,
        },
    }),
);

export default homeStyles;
