import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assests/images/avatar.png";
import HeaderLogo from "../../assests/images/header-logo.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src={HeaderLogo} alt="" height="50" />
          </a>
        </div>

        <a id="toggle_btn" href="#ChangeThis">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className="page-title-box">
          <h3>Community Brands</h3>
        </div>

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa fa-bars"></i>
        </a>

        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#ChangeThis"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img src={Avatar} alt="" />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/profile">
                My Profile
              </Link>

              <Link className="dropdown-item" to="/login">
                Logout
              </Link>
            </div>
          </li>
        </ul>

        <div className="dropdown mobile-user-menu">
          <a
            href="#ChangeThis"
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
            <Link className="dropdown-item" to="/login">
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
