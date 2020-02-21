import React from "react";
import axios from "axios";
import moment from "moment";
import Avatar from "../../assests/images/avatar.png";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";

export default class MyTeam extends React.Component {
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
                  <h3 className="page-title">Team</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="">Employee</a>
                    </li>
                    <li className="breadcrumb-item active">My Team</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    class="table table-striped custom-table mb-0 datatable dataTable no-footer"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th>Employee</th>
                        <th>CO Taken</th>
                        <th>PTO Balance</th>
                        <th>PTO Taken</th>
                        <th>PTO Planned</th>
                        <th>Floater Holidays</th>
                      </tr>
                      <tr role="row">
                        <td>Amir Mursal</td>
                        <td>5</td>
                        <td>10</td>
                        <td>10</td>
                        <td>5</td>
                        <td>5</td>
                      </tr>
                      <tr role="row">
                        <td>Rajesh Waman</td>
                        <td>5</td>
                        <td>10</td>
                        <td>10</td>
                        <td>5</td>
                        <td>5</td>
                      </tr>
                      <tr role="row">
                        <td>Vijay Gaikwad</td>
                        <td>5</td>
                        <td>10</td>
                        <td>10</td>
                        <td>5</td>
                        <td>5</td>
                      </tr>
                      <tr role="row">
                        <td>Kavita Zinage</td>
                        <td>5</td>
                        <td>10</td>
                        <td>10</td>
                        <td>5</td>
                        <td>5</td>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
