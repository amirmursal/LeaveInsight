import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assests/images/avatar.png";
import HeaderLogo from "../../assests/images/logo_white.png";
export default class Header extends React.Component {
  logout = () => {
    localStorage.removeItem("TokenId");
    localStorage.removeItem("UserId");
    localStorage.removeItem("EmpID");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <a href="#" className="logo">
            <img src={HeaderLogo} alt="" height="50" />
          </a>
        </div>

        <a id="toggle_btn" href="#">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className="page-title-box">
          <h3>Leave Insight Community Brands</h3>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa fa-bars"></i>
        </a>

        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img src={Avatar} alt="" />
                <span className="status online"></span>
              </span>
              <span></span>
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/profile">
                My Profile
              </Link>

              <div className="dropdown-item" onClick={() => this.logout()}>
                Logout
              </div>
            </div>
          </li>
        </ul>

        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/profile">
              My Profile
            </Link>
            <div className="dropdown-item" onClick={() => this.logout()}>
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  }
}
