import React from "react";
import Layout from "../src/components/layout/Layout";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../src/components/login/Login";

const history = createBrowserHistory();

const LayoutComponent = props => <Layout {...props} />;
const LoginComponent = props => <Login {...props} />;

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/" component={LayoutComponent} />
        </Switch>
      </Router>
    );
  }
}
