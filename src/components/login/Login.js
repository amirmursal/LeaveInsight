import React from "react";
import axios from "axios";
import { serverUrl } from "../../config";
import logo from "../../assests/images/logo.png";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };
  }

  // common input change handler for input and select
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = () => {
    const { username, password } = this.state;
    const { history } = this.props;
    axios
      .get(
        "https://" +
          serverUrl +
          "/AptifyServicesAPI/services/Authentication/Login/DomainWithContainer?UserName=" +
          username +
          "&Password=" +
          password
      )
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        if (response.data !== null) {
          localStorage.setItem("UserId", JSON.stringify(response.data.UserId));
          localStorage.setItem(
            "TokenId",
            JSON.stringify(response.data.TokenId)
          );
          history.push("/");
        } else {
          this.setState({
            username: "",
            password: "",
            error: true
          });
        }
      })
      .catch(error => {
        this.setState({
          username: "",
          password: "",
          error: true
        });
        console.log(error);
      });
  };
  render() {
    const { username, password } = this.state;
    const isDisable = !username || !password;
    return (
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container account-logo">
              <a href="index.html">
                <img src={logo} alt="Community Brands" />
              </a>
            </div>

            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to Leave Insight</p>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    name="username"
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={event => this.handleChange(event)}
                    tabIndex="1"
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    value={password}
                    onChange={event => this.handleChange(event)}
                    tabIndex="2"
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    disabled={isDisable}
                    className="btn btn-primary account-btn"
                    onClick={() => this.login()}
                    tabIndex="3"
                  >
                    Login
                  </button>
                </div>
                {this.state.error && (
                  <label
                    className="card-footer-item"
                    style={{ color: "#dc3545" }}
                  >
                    username or password incorrect
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
