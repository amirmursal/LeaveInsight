import React from "react";
import axios from "axios";
import moment from "moment";
import Loader from "../common/Loader";
import { serverUrl } from "../../config";
import ApplyLeave from "./ApplyLeave";
import EditLeave from "./EditLeave";
import { UserConsumer } from "../provider/UserProvider";

export default class MyLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEditOpen: false,
      leave: {}
    };
  }

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
   * function for deleting leave request
   * @param leave
   * @param getUser
   */

  deleteLeave = (leave, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {};
    axios
      .post(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/DeleteRecord?EntityID=1676&RecordID=" +
          parseInt(leave),
        data,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId
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
            {element.Status !== "Rejected" && (
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
                    <button
                      className="dropdown-item"
                      onClick={() => this.toggleEditLeaveDialog(element)}
                    >
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => this.deleteLeave(element.ID, getUser)}
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </button>
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
            )}
          </td>
        </tr>
      );
    });
  };

  /**
   * function takes care for toggle apply leave dialog
   */
  toggleApplyLeaveDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  /**
   * function takes care for toggle edit leave dialog
   */
  toggleEditLeaveDialog = leave => {
    this.setState({
      isEditOpen: !this.state.isEditOpen,
      leave: leave
    });
  };

  render() {
    const { isOpen, isEditOpen, leave } = this.state;

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
                  <button
                    className="btn add-btn"
                    onClick={() => this.toggleApplyLeaveDialog()}
                  >
                    <i className="fa fa-plus"></i> Apply Leave
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Leaves Forward</h6>
                  <h4>{user.LeavesCarriedForward}</h4>
                </div>
              </div>
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
                  <h6>Leaves Accrual</h6>
                  <h4>{user.LeaveAccrual}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Loss of Pay</h6>
                  <h4>{user.LOP}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>Leaves Balance</h6>
                  <h4>{user.CurrentBalance}</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_length">
                  <label>
                    {Array.isArray(user.AppliedLeaves) &&
                    user.AppliedLeaves.length
                      ? "All Leaves"
                      : "No leaves applied yet"}{" "}
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6"></div>
            </div>

            <div className="row">
              <div className="col-md-12">
                {Array.isArray(user.AppliedLeaves) &&
                user.AppliedLeaves.length ? (
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
                ) : null}
              </div>
            </div>

            {isOpen && (
              <React.Fragment>
                <ApplyLeave
                  open={isOpen}
                  toggleApplyLeaveDialog={() => this.toggleApplyLeaveDialog()}
                />
                <div className="modal-backdrop fade show"></div>
              </React.Fragment>
            )}

            {isEditOpen && (
              <React.Fragment>
                <EditLeave
                  leave={leave}
                  open={isEditOpen}
                  toggleEditLeaveDialog={() => this.toggleEditLeaveDialog()}
                />
                <div className="modal-backdrop fade show"></div>
              </React.Fragment>
            )}

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
