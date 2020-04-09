import React from "react";
import axios from "axios";
import moment from "moment";
import Loader from "../common/Loader";
import { serverUrl } from "../../config";
import ApplyLeave from "./ApplyLeave";
import EditLeave from "./EditLeave";
import DeleteLeave from "./DeleteLeave";
import { UserConsumer } from "../provider/UserProvider";

export default class MyLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEditOpen: false,
      isDeleteOpen: false,
      leave: {},
      leaveid: null,
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
      Status: "Cancelled",
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
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        getUser();
      })
      .catch((error) => {
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
            AptifyAuthorization: "DomainWithContainer " + TokenId,
          },
        }
      )
      .then((response) => {
        getUser();
      })
      .catch((error) => {
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
      Status: "Availed",
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
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        getUser();
      })
      .catch((error) => {
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
          <td>{element.Project}</td>
          <td>{moment(element.StartDate).format("DD/MM/YYYY")}</td>
          <td>{element.Duration}</td>
          <td>{element.ClientDescription}</td>
          <td>{element.Status}</td>
          <td className="text-right">
            {element.Status !== "Rejected" &&
              element.Status !== "Cancelled" &&
              element.Status !== "Availed" && (
                <div className="dropdown dropdown-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>

                  {element.Status === "Applied" ? (
                    <div className="dropdown-menu dropdown-menu-right">
                      <button
                        className="dropdown-item"
                        onClick={() => this.toggleEditLeaveDialog(element)}
                      >
                        <i className="fa fa-pencil m-r-5"></i> Edit
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => this.toggleDeleteLeaveDialog(element.ID)}
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
      isOpen: !this.state.isOpen,
    });
  };

  /**
   * function takes care for toggle edit leave dialog
   */
  toggleEditLeaveDialog = (leave) => {
    this.setState({
      isEditOpen: !this.state.isEditOpen,
      leave: leave,
    });
  };

  /**
   * function takes care for toggle delete leave dialog
   */
  toggleDeleteLeaveDialog = (leaveid) => {
    this.setState({
      isDeleteOpen: !this.state.isDeleteOpen,
      leaveid: leaveid,
    });
  };

  render() {
    const { isOpen, isEditOpen, leave, isDeleteOpen, leaveid } = this.state;

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
              <div className="col-md-4">
                <div className="dataTables_length">
                  <label>PTO Details</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="stats-info">
                  <h6>Carry Forwarded</h6>
                  <h4> {user.LeavesCarriedForward} </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>PTO Accrual</h6>
                  <h4>{user.LeaveAccrual} </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>PTO Taken</h6>
                  <h4>{user.LeaveTaken}</h4>
                </div>
              </div>

              <div className="col-md-2">
                <div className="stats-info">
                  <h6>LWP</h6>
                  <h4>{user.LOP}</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="stats-info">
                  <h6>PTO Balance</h6>
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
                      ? "All leaves"
                      : "No leaves applied yet"}
                  </label>
                </div>
              </div>
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
                          <th>Leave Type</th>
                          <th>Start Date</th>
                          <th>Work Hours</th>
                          <th>Reason</th>
                          <th>Status</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderAppliedLeaves(
                          user.AppliedLeaves.sort((a, b) => b.ID - a.ID),
                          getUser
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  !Array.isArray(user.AppliedLeaves) && <Loader />
                )}
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

            {isDeleteOpen && (
              <React.Fragment>
                <DeleteLeave
                  leaveid={leaveid}
                  open={isDeleteOpen}
                  toggleDeleteLeaveDialog={() => this.toggleDeleteLeaveDialog()}
                />
                <div className="modal-backdrop fade show"></div>
              </React.Fragment>
            )}
          </div>
        )}
      </UserConsumer>
    );
  }
}
