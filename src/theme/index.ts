import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
    typography: {
        fontFamily: '"Nunito", "Helvetica","Arial",sans-serif',
        fontSize: 16,
        h1: {
            fontSize: "1.7rem",
        },
        h2: {
            fontSize: "1.2rem",
        },
        h3: {
            fontSize: "1rem",
        },
    },
});

export default theme;
