import React from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  render() {
    //const isMenuActive = ?"active": "";
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              {/*<li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-dashboard"></i> <span> Dashboard</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link className="active" to="/admindashboard">
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/employeedashboard">Employee Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-cube"></i> <span> Apps</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chat.html">Chat</a>
                  </li>
                  <li className="submenu">
                    <a href="#ChangeThis">
                      <span> Calls</span> <span className="menu-arrow"></span>
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="voice-call.html">Voice Call</a>
                      </li>
                      <li>
                        <a href="video-call.html">Video Call</a>
                      </li>
                      <li>
                        <a href="outgoing-call.html">Outgoing Call</a>
                      </li>
                      <li>
                        <a href="incoming-call.html">Incoming Call</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="events.html">Calendar</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="inbox.html">Email</a>
                  </li>
                  <li>
                    <a href="file-manager.html">File Manager</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Employee</span>
              </li>*/}
              <li className="submenu">
                <a href="" className="noti-dot">
                  <i className="la la-user"></i> <span> Employee</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  {/*<li>
                    <a href="employees.html">All Employees</a>
                  </li>
                  <li>
                    <a href="holidays.html">Holidays</a>
                  </li>
                  <li>
                    <a href="leaves.html">
                      Leaves (Reportee ){" "}
                      <span className="badge badge-pill bg-primary float-right">
                        1
                      </span>
                    </a>
                  </li>*/}
                  <li>
                    <Link to="/myleaves">My Leaves</Link>
                  </li>
                  {/*<li>
                    <a href="leave-settings.html">Leave Settings</a>
                  </li>
                  <li>
                    <a href="attendance.html">Attendance (Admin)</a>
                  </li>
                  <li>
                    <a href="attendance-employee.html">Attendance (Employee)</a>
                  </li>
                  <li>
                    <a href="departments.html">Departments</a>
                  </li>
                  <li>
                    <a href="designations.html">Designations</a>
                  </li>
                  <li>
                    <a href="timesheet.html">Timesheet</a>
                  </li>
                  <li>
                    <a href="overtime.html">Overtime</a>
                  </li>*/}
                </ul>
              </li>
              {/*  <li>
                <a href="clients.html">
                  <i className="la la-users"></i> <span>Clients</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-rocket"></i> <span> Projects</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="tasks.html">Tasks</a>
                  </li>
                  <li>
                    <a href="task-board.html">Task Board</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="leads.html">
                  <i className="la la-user-secret"></i> <span>Leads</span>
                </a>
              </li>
              <li>
                <a href="tickets.html">
                  <i className="la la-ticket"></i> <span>Tickets</span>
                </a>
            </li>
              <li className="menu-title">
                <span>HR</span>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-files-o"></i> <span> Accounts </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="estimates.html">Estimates</a>
                  </li>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="payments.html">Payments</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="provident-fund.html">Provident Fund</a>
                  </li>
                  <li>
                    <a href="taxes.html">Taxes</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-money"></i> <span> Payroll </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                  <li>
                    <a href="payroll-items.html"> Payroll Items </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="policies.html">
                  <i className="la la-file-pdf-o"></i> <span>Policies</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-pie-chart"></i> <span> Reports </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="expense-reports.html"> Expense Report </a>
                  </li>
                  <li>
                    <a href="invoice-reports.html"> Invoice Report </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Performance</span>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-graduation-cap"></i>{" "}
                  <span> Performance </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="performance-indicator.html">
                      {" "}
                      Performance Indicator{" "}
                    </a>
                  </li>
                  <li>
                    <a href="performance.html"> Performance Review </a>
                  </li>
                  <li>
                    <a href="performance-appraisal.html">
                      {" "}
                      Performance Appraisal{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-crosshairs"></i> <span> Goals </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="goal-tracking.html"> Goal List </a>
                  </li>
                  <li>
                    <a href="goal-type.html"> Goal Type </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-edit"></i> <span> Training </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="training.html"> Training List </a>
                  </li>
                  <li>
                    <a href="trainers.html"> Trainers</a>
                  </li>
                  <li>
                    <a href="training-type.html"> Training Type </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="promotion.html">
                  <i className="la la-bullhorn"></i> <span>Promotion</span>
                </a>
              </li>
              <li>
                <a href="resignation.html">
                  <i className="la la-external-link-square"></i>{" "}
                  <span>Resignation</span>
                </a>
              </li>
              <li>
                <a href="termination.html">
                  <i className="la la-times-circle"></i>{" "}
                  <span>Termination</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Administration</span>
              </li>
              <li>
                <a href="assets.html">
                  <i className="la la-object-ungroup"></i> <span>Assets</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-briefcase"></i> <span> Jobs </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="jobs.html"> Manage Jobs </a>
                  </li>
                  <li>
                    <a href="job-applicants.html"> Applied Candidates </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="knowledgebase.html">
                  <i className="la la-question"></i> <span>Knowledgebase</span>
                </a>
              </li>
              <li>
                <a href="activities.html">
                  <i className="la la-bell"></i> <span>Activities</span>
                </a>
              </li>
              <li>
                <a href="users.html">
                  <i className="la la-user-plus"></i> <span>Users</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <i className="la la-cog"></i> <span>Settings</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-user"></i> <span> Profile </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="profile.html"> Employee Profile </a>
                  </li>
                  <li>
                    <a href="client-profile.html"> Client Profile </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-key"></i> <span> Authentication </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="otp.html"> OTP </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-exclamation-triangle"></i>{" "}
                  <span> Error Pages </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-columns"></i> <span> Pages </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="search.html"> Search </a>
                  </li>
                  <li>
                    <a href="faq.html"> FAQ </a>
                  </li>
                  <li>
                    <a href="terms.html"> Terms </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="blank-page.html"> Blank Page </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
                <a href="components.html">
                  <i className="la la-puzzle-piece"></i> <span>Components</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-object-group"></i> <span> Forms </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs </a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups </a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form </a>
                  </li>
                  <li>
                    <a href="form-vertical.html"> Vertical Form </a>
                  </li>
                  <li>
                    <a href="form-mask.html"> Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html"> Form Validation </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-table"></i> <span> Tables </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Table </a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li>
                <a href="#ChangeThis">
                  <i className="la la-file-text"></i> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#ChangeThis">
                  <i className="la la-info"></i> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ml-auto">v3.2</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#ChangeThis">
                  <i className="la la-share-alt"></i> <span>Multi Level</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="#ChangeThis">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow"></span>
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="#ChangeThis">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="#ChangeThis">
                          {" "}
                          <span> Level 2</span>{" "}
                          <span className="menu-arrow"></span>
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="#ChangeThis">Level 3</a>
                          </li>
                          <li>
                            <a href="#ChangeThis">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#ChangeThis">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#ChangeThis">
                      {" "}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
