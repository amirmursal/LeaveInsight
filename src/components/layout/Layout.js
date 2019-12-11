import React from "react";
import { Route } from "react-router-dom";
import Login from "../login/Login";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Profile from "../profile/Profile";
import MyLeaves from "../myleaves/MyLeaves";

export default class Layout extends React.Component {
  render() {
    const isLoggedIn = JSON.parse(localStorage.getItem("TokenId"));
    return isLoggedIn ? (
      <div>
        <Header history={this.props.history} />
        <Sidebar />
        <div className="page-wrapper">
          <Route path="/myleaves" component={MyLeaves} />
          <Route path="/" exact component={MyLeaves} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Login} />
        </div>
      </div>
    ) : (
      <Login history={this.props.history} />
    );
  }
}
