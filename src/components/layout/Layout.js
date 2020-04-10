import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../config";
import Login from "../login/Login";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Profile from "../profile/Profile";
import MyLeaves from "../leaves/MyLeaves";
import MyTeam from "../myteam/MyTeam";
import ReporteeLeaves from "../leaves/ReporteeLeaves";

export default class Layout extends React.Component {
  componentDidMount() {
    this.isTokenValid();
  }

  isTokenValid = () => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    axios
      .get(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/UserInformation/",
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
          },
        }
      )
      .then((response) => {})
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("TokenId");
        this.props.history.push("/login");
      });
  };

  render() {
    const isLoggedIn = JSON.parse(localStorage.getItem("TokenId"));
    return isLoggedIn ? (
      <div>
        <Header history={this.props.history} />
        <Sidebar />
        <div className="page-wrapper">
          <Route path="/" exact component={MyLeaves} />
          <Route path="/reporteeleaves" component={ReporteeLeaves} />
          <Route path="/myleaves" component={MyLeaves} />
          <Route path="/myteam" component={MyTeam} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Login} />
        </div>
      </div>
    ) : (
      <Login history={this.props.history} />
    );
  }
}
