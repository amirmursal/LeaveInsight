import React from "react";
import Layout from "../src/components/layout/Layout";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createHashHistory } from "history";
import Login from "../src/components/login/Login";
import UserProvider from "../src/components/provider/UserProvider";

const history = createHashHistory();

const LayoutComponent = props => <Layout {...props} />;
const LoginComponent = props => <Login {...props} />;

export default class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <HashRouter history={history}>
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/" component={LayoutComponent} />
          </Switch>
        </HashRouter>
      </UserProvider>
    );
  }
}
