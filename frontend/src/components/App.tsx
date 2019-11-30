import React from 'react';

import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Main from './Main';
import Nav from './Nav';
import NotFound from './NotFound';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history} >
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
