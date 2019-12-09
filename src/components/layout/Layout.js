import React from "react";
import { Route } from "react-router-dom";
import Login from "../login/Login";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import AdminDashboard from "../admindashboard/AdminDashboard";
import EmployeeDashboard from "../employeedashboard/EmployeeDashboard";

export default class Layout extends React.Component {
  render() {
    //const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    const isLoggedIn = true;
    return isLoggedIn ? (
      <div>
        <Header history={this.props.history} />
        <Sidebar />
        <div className="page-wrapper">
          <Route path="/admindashboard" component={AdminDashboard} />
          <Route path="/employeedashboard" component={EmployeeDashboard} />
        </div>
      </div>
    ) : (
      <Login history={this.props.history} />
    );
  }
}
