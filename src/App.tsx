import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyle from "./assets/styles";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </ThemeProvider>
);

export default App;
