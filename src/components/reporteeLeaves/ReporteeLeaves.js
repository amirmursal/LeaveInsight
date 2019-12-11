import React from "react";
import axios from "axios";
import Avatar from "../../assests/images/avatar.png";
import { serverUrl } from "../../config";

export default class ReporteeLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReporteeLeaves: [],
      error: false
    };
  }

  approveLeaveRequest = () => {};
  cancellLeaveRequest = () => {};
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
            ReporteeLeaves: response.data.Employee[0].ReporteeLeaves
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

  renderReporteeLeaves = () => {
    return this.state.ReporteeLeaves.map((element, i) => {
      return (
        <tr>
          <td>
            <h2 className="table-avatar">
              <a href="" className="avatar">
                <img alt="" src={Avatar} />
              </a>
              <a href="#">
                Richard Miles <span>Web Developer</span>
              </a>
            </h2>
          </td>
          <td>Planned PTO</td>
          <td>8 Mar 2019</td>
          <td>Going to Hospital</td>

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
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item">
                  <i
                    className="fa fa-check m-r-5"
                    onClick={() => this.approveLeaveRequest()}
                  ></i>{" "}
                  Approved
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => this.cancellLeaveRequest()}
                >
                  <i className="fa fa-ban m-r-5"></i> Cancelled
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
              <h4>12</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>Reason</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/*this.renderReporteeLeaves()*/}
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="" className="avatar">
                          <img alt="" src={Avatar} />
                        </a>
                        <a href="#">
                          Richard Miles <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>Planned PTO</td>
                    <td>8 Mar 2019</td>
                    <td>Going to Hospital</td>

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
                        <div className="dropdown-menu dropdown-menu-right">
                          <button className="dropdown-item">
                            <i
                              className="fa fa-check m-r-5"
                              onClick={() => this.approveLeaveRequest()}
                            ></i>{" "}
                            Approved
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() => this.cancellLeaveRequest()}
                          >
                            <i className="fa fa-ban m-r-5"></i> Cancelled
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
