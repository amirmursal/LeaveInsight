import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../provider/UserProvider";

export default class Sidebar extends React.Component {
  componentDidMount() {
    /**
     * Init function for side bar to prevent double click issue
     * of main menu to display submenus
     */
    window.sidenavinit();
  }

  render() {
    return (
      <UserConsumer>
        {({ user }) => (
          <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  <li className="submenu">
                    <a href="" className="noti-dot">
                      <i className="la la-user"></i> <span> Employee</span>{" "}
                      <span className="menu-arrow"></span>
                    </a>
                    <ul style={{ display: "none" }}>
                      {user.IsSupervisor === "1" && (
                        <li>
                          <Link to="/reporteeleaves">
                            My Actions{" "}
                            <span className="badge badge-pill bg-primary float-right">
                              {user.ReporteeAppliedLeaves !== undefined
                                ? user.ReporteeAppliedLeaves.length
                                : 0}
                            </span>
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link to="/myleaves">My Leaves</Link>
                      </li>
                      {user.IsSupervisor === "1" && (
                        <li>
                          <Link to="/myteam">My Team</Link>
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
