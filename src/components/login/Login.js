import React from "react";
import axios from "axios";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";
import logo from "../../assests/images/logo.png";
import Loader from "../common/Loader";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
      loading: false
    };
  }

  /**
   * common input change handler for input and select
   * @param event
   */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**
   * function take care for login into system
   * @param getUser
   */
  login = getUser => {
    const { username, password } = this.state;
    const { history } = this.props;
    this.setState({
      loading: true
    });
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
          password: "",
          loading: false
        });
        if (response.data !== null) {
          localStorage.setItem("UserId", JSON.stringify(response.data.UserId));
          localStorage.setItem(
            "TokenId",
            JSON.stringify(response.data.TokenId)
          );
          getUser(response.data);
          history.push("/");
        } else {
          this.setState({
            username: "",
            password: "",
            error: true,
            loading: false
          });
        }
      })
      .catch(error => {
        this.setState({
          username: "",
          password: "",
          error: true,
          loading: false
        });
        console.log(error);
      });
  };

  render() {
    const { username, password, loading } = this.state;
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
                <p className="account-subtitle">Login to Leave Insight</p>

                <div className="form-group">
                  <label>Username</label>
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
                  <UserConsumer>
                    {({ getUser }) => (
                      <button
                        disabled={isDisable}
                        className="btn btn-primary account-btn"
                        onClick={() => this.login(getUser)}
                        tabIndex="3"
                      >
                        {loading && <Loader />} Login
                      </button>
                    )}
                  </UserConsumer>
                </div>
                {this.state.error && (
                  <label
                    className="card-footer-item"
                    style={{ color: "#dc3545" }}
                  >
                    Username or Password incorrect
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
