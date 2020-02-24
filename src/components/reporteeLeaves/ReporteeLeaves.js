import React from "react";
import axios from "axios";
import moment from "moment";
import Avatar from "../../assests/images/avatar.png";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";

export default class ReporteeLeaves extends React.Component {
  /**
   * function takes care for approve leave request
   * @param user
   * @param getUser
   */
  approveLeaveRequest = (leave, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {
      ID: parseInt(leave),
      EntityName: "Employee Work Schedules",
      Status: "Approved"
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
   * function takes care for cancel leave request
   * @param user
   * @param getUser
   */
  cancellLeaveRequest = (leave, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {
      ID: parseInt(leave),
      EntityName: "Employee Work Schedules",
      Status: "Rejected"
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
   * function takes care for rendering reportee applied leaves data
   * @param ReporteeAppliedLeaves array
   * @param getUser
   */
  reporteeAppliedLeaves = (ReporteeAppliedLeaves, getUser) => {
    return ReporteeAppliedLeaves.map((element, i) => {
      return (
        <tr key={i}>
          <td>
            <h2 className="table-avatar">
              <a href="" className="avatar">
                <img alt="" src={Avatar} />
              </a>
              {element.Employee}
            </h2>
          </td>
          <td>Planned PTO</td>
          <td>{moment(element.StartDate).format("MM/DD/YYYY")}</td>
          <td>{element.ClientDescription}</td>
          <td>{element.Status}</td>
          <td className="text-right">
            <div className="dropdown dropdown-action">
              <a
                href=""
                className="action-icon dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons">more_vert</i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <button
                  className="dropdown-item"
                  onClick={() => this.approveLeaveRequest(element.ID, getUser)}
                >
                  <i className="fa fa-check m-r-5"></i> Approve
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => this.cancellLeaveRequest(element.ID, getUser)}
                >
                  <i className="fa fa-ban m-r-5"></i> Reject
                </button>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <UserConsumer>
        {({ user, getUser }) => (
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Leaves</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="">Employee</a>
                    </li>
                    <li className="breadcrumb-item active">Awaiting Actions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="stats-info">
                  <h6>Planned Leaves</h6>
                  <h4>
                    {user.ReporteeLeaves !== undefined
                      ? user.ReporteeLeaves.length
                      : 0}
                  </h4>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stats-info">
                  <h6>Todays Absents</h6>
                  <h4>
                    {user.TodaysLeaves !== undefined
                      ? user.TodaysLeaves.length
                      : 0}
                  </h4>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stats-info">
                  <h6>Pending Requests</h6>
                  <h4>
                    {user.ReporteeAppliedLeaves !== undefined
                      ? user.ReporteeAppliedLeaves.length
                      : 0}
                  </h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                {Array.isArray(user.ReporteeAppliedLeaves) &&
                user.ReporteeAppliedLeaves.length ? (
                  <div className="table-responsive">
                    <table
                      className="table table-striped custom-table mb-0 datatable dataTable no-footer"
                      id="DataTables_Table_0"
                      role="grid"
                      aria-describedby="DataTables_Table_0_info"
                    >
                      <thead>
                        <tr role="row">
                          <th>Employee</th>
                          <th>Leave Type</th>
                          <th>Start Date</th>
                          <th>Reason</th>
                          <th>Status</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.reporteeAppliedLeaves(
                          user.ReporteeAppliedLeaves,
                          getUser
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <span>No Pending leave request</span>
                )}
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
