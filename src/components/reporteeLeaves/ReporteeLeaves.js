import React from "react";
import axios from "axios";
import moment from "moment";
import Avatar from "../../assests/images/avatar.png";
import { serverUrl } from "../../config";

export default class ReporteeLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReporteeAppliedLeaves: [],
      error: false
    };
  }

  approveLeaveRequest = leave => {
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
        if (response.data !== null) {
          this.getProfileInfo();
          console.log(response.data);
        } else {
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  cancellLeaveRequest = leave => {
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
        if (response.data !== null) {
          this.getProfileInfo();
          console.log(response.data);
        } else {
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  getProfileInfo = () => {
    const userId = JSON.parse(localStorage.getItem("UserId"));
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    axios
      .get(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GetEmployeeInformation/" +
          userId,
        { headers: { AptifyAuthorization: "DomainWithContainer " + TokenId } }
      )
      .then(response => {
        if (response.data !== null) {
          console.log(response.data.Employee[0]);
          this.setState({
            ReporteeAppliedLeaves:
              response.data.Employee[0].ReporteeAppliedLeaves
          });
        } else {
          this.setState({
            error: true
          });
        }
      })
      .catch(error => {
        this.setState({
          error: true
        });
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProfileInfo();
  }

  reporteeAppliedLeaves = () => {
    return this.state.ReporteeAppliedLeaves.map((element, i) => {
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
          <td>{moment(element.StartDate).format("DD/MM/YYYY")}</td>
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
                  onClick={() => this.approveLeaveRequest(element.ID)}
                >
                  <i className="fa fa-check m-r-5"></i> Approved
                </button>
                <button
                  className="dropdown-item"
                  onClick={element => this.cancellLeaveRequest(element)}
                >
                  <i className="fa fa-ban m-r-5"></i> Rejected
                </button>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { ReporteeAppliedLeaves } = this.state;
    return (
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Leaves</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Employee</a>
                </li>
                <li className="breadcrumb-item active">Reportee Leaves</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="stats-info">
              <h6>Planned Leaves</h6>
              <h4>
                8 <span>Today</span>
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-info">
              <h6>Unplanned Leaves</h6>
              <h4>
                0 <span>Today</span>
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-info">
              <h6>Pending Requests</h6>
              <h4>{ReporteeAppliedLeaves.length}</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {ReporteeAppliedLeaves.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Leave Type</th>
                      <th>Start Date</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>{this.reporteeAppliedLeaves()}</tbody>
                </table>
              </div>
            ) : (
              "No Pending leave request"
            )}
          </div>
        </div>
      </div>
    );
  }
}
