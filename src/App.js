import React from "react";
import Layout from "../src/components/layout/Layout";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../src/components/login/Login";

const history = createBrowserHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    );
  }
}
