import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyle from "./assets/styles";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
            <Switch></Switch>
        </Router>
    </ThemeProvider>
);

export default App;
