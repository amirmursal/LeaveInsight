import React from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import Loader from "../common/Loader";
import "react-datepicker/dist/react-datepicker.css";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";

export default class MyLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EmpID: null,
      ProjectID: 1118,
      Description: "",
      WorkHours: 8,
      StartDate: new Date(),
      error: false,
      message: null
    };
  }

  /**
   * Date change handler for react-datepicker
   * @param date
   */
  handleDateChange = date => {
    this.setState({
      StartDate: date
    });
  };

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
   * function takes care for applying leave request
   * @param user
   * @param getUser
   */
  leaveRequest = (user, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {
      ID: -1,
      EntityName: "Employee Work Schedules",
      Type: "Project",
      Status: "Applied",
      EmployeeID: parseInt(user.EmpID),
      ProjectID: this.state.ProjectID,
      Description: this.state.Description,
      WorkHours: this.state.WorkHours,
      StartDate: moment(this.state.StartDate).format("MM/DD/YYYY"),
      EndDate: moment(this.state.StartDate).format("MM/DD/YYYY")
    };
    axios
      .post(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GenericEntity/SaveData",
        data,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        getUser();
        this.setState({
          ProjectID: 1118,
          Description: "",
          WorkHours: 8,
          StartDate: new Date(),
          message: "Leave applied successfully"
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      message: null
    });
  };

  /**
   * function takes care for cancell leave request
   * @param user
   * @param getUser
   */
  cancelLeave = (leave, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {
      ID: parseInt(leave),
      EntityName: "Employee Work Schedules",
      Status: "Cancelled"
    };
    axios
      .post(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GenericEntity/SaveData",
        data,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        getUser();
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * function takes care for availing leave request
   * @param user
   * @param getUser
   */
  availLeave = (leave, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {
      ID: parseInt(leave),
      EntityName: "Employee Work Schedules",
      Status: "Availed"
    };
    axios
      .post(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GenericEntity/SaveData",
        data,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        getUser();
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * function takes care for rendering applied leaves data
   * @param AppliedLeaves array
   * @param getUser
   */
  renderAppliedLeaves = (AppliedLeaves, getUser) => {
    return AppliedLeaves.map((element, i) => {
      return (
        <tr key={i}>
          <td>{moment(element.StartDate).format("DD/MM/YYYY")}</td>
          <td>{element.Duration}</td>
          <td>{element.ClientDescription}</td>
          <td>{element.Status}</td>
          <td className="text-right">
            <div className="dropdown dropdown-action">
              <a
                href="#"
                className="action-icon dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons">more_vert</i>
              </a>
              {element.Status === "Cancelled" ||
              element.Status === "Applied" ? (
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#edit_leave"
                  >
                    <i className="fa fa-pencil m-r-5"></i> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#delete_approve"
                  >
                    <i className="fa fa-trash-o m-r-5"></i> Delete
                  </a>
                </div>
              ) : (
                <div className="dropdown-menu dropdown-menu-right">
                  <button
                    className="dropdown-item"
                    onClick={() => this.availLeave(element.ID, getUser)}
                  >
                    <i className="fa fa-check m-r-5"></i> Avail
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => this.cancelLeave(element.ID, getUser)}
                  >
                    <i className="fa fa-trash-o m-r-5"></i> Cancel
                  </button>
                </div>
              )}
            </div>
          </td>
        </tr>
      );
    });
  };

  render() {
    const {
      StartDate,
      ProjectID,
      Description,
      WorkHours,
      message
    } = this.state;

    return (
      <UserConsumer>
        {({ user, getUser }) => (
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Welcome {user.FirstName}!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="">Employee</a>
                    </li>
                    <li className="breadcrumb-item active">My Leaves</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#C"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_leave"
                  >
                    <i className="fa fa-plus"></i> Apply Leave
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Leaves Taken</h6>
                  <h4>{user.LeaveTaken}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Applied Leaves</h6>
                  <h4>{user.AppliedLeaveCount}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Leaves Balance</h6>
                  <h4>{user.CurrentBalance}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Leaves Accrual</h6>
                  <h4>{user.LeaveAccrual}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>
                    Loss of Pay <sub>(Monthly)</sub>
                  </h6>
                  <h4>{user.LOP}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Leaves forward</h6>
                  <h4>{user.LeavesCarriedForward}</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                {user.AppliedLeaves ? (
                  <div className="table-responsive">
                    <table
                      className="table table-striped custom-table mb-0 datatable dataTable no-footer"
                      id="DataTables_Table_0"
                      role="grid"
                      aria-describedby="DataTables_Table_0_info"
                    >
                      <thead>
                        <tr role="row">
                          <th>Start Date</th>
                          <th>Work Hours</th>
                          <th>Reason</th>
                          <th>Status</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderAppliedLeaves(user.AppliedLeaves, getUser)}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <span>No leaves applied yet</span>
                )}
              </div>
            </div>

            <div
              id="add_leave"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Apply Leave</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>
                        Leave Type <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        value={ProjectID}
                        name="ProjectID"
                        onChange={this.handleChange}
                      >
                        <option value="1118">PTO</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Duration<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        value={WorkHours}
                        name="WorkHours"
                        onChange={this.handleChange}
                      >
                        <option value="8"> Full Day</option>
                        <option value="4"> Half Day</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Date <span className="text-danger">*</span>
                      </label>
                      <div>
                        <DatePicker
                          className="form-control"
                          selected={StartDate}
                          onChange={this.handleDateChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                        Leave Reason <span className="text-danger">*</span>
                      </label>
                      <textarea
                        rows="4"
                        name="Description"
                        className="form-control"
                        value={Description}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                    {message && <span>{message}</span>}

                    <div className="submit-section">
                      <button
                        disabled={!Description}
                        className="btn btn-primary submit-btn"
                        onClick={() => this.leaveRequest(user, getUser)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="edit_leave"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Leave</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>
                        Leave Type <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        value={ProjectID}
                        name="ProjectID"
                        onChange={this.handleChange}
                      >
                        <option value="1118"> PTO</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Duration<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        value={WorkHours}
                        name="WorkHours"
                        onChange={this.handleChange}
                      >
                        <option value="8"> Full Day</option>
                        <option value="4"> Half Day</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Date <span className="text-danger">*</span>
                      </label>
                      <div>
                        <DatePicker
                          className="form-control"
                          selected={StartDate}
                          onChange={this.handleDateChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                        Leave Reason <span className="text-danger">*</span>
                      </label>
                      <textarea
                        rows="4"
                        name="Description"
                        className="form-control"
                        value={Description}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        onClick={() => this.updateLeaveRequest()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal custom-modal fade"
              id="delete_approve"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-header">
                      <h3>This feature will be added in next version</h3>
                      {/*<p>This feature will be added in next version</p>*/}
                    </div>
                    <div className="modal-btn delete-action">
                      <div className="row">
                        {/* <div className="col-6">
                      <a href="" className="btn btn-primary continue-btn">
                        Delete
                      </a>
            </div>*/}
                        <div className="col-6">
                          <a
                            href=""
                            data-dismiss="modal"
                            className="btn btn-primary cancel-btn"
                          >
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
