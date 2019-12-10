import React from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { serverUrl } from "../../config";

const TokenId = JSON.parse(localStorage.getItem("TokenId"));
export default class MyLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //EmployeeID: 50368,
      ProjectID: 1118,
      ClientDescription: "",
      Duration: 8,
      StartDate: new Date()
    };
  }

  handleDateChange = date => {
    this.setState({
      StartDate: date
    });
  };

  // common input change handler for input and select
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  leaveRequest = () => {
    let data = {
      ID: -1,
      EntityName: "Hours",
      TaskDefinitionID: 178,
      //EmployeeID: 50368,
      ProjectID: this.state.ProjectID,
      ClientDescription: this.state.ClientDescription,
      Duration: this.state.Duration,
      StartDate: moment(this.state.StartDate).format("DD/MM/YYYY")
    };
    axios
      .post(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GenericEntity/SaveData",
        data,
        {
          headers: {
            AptifyAuthorization: TokenId,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        if (response.data !== null) {
          console.log(response.data);
        } else {
          this.setState({
            ProjectID: 1118,
            ClientDescription: "",
            Duration: 8,
            StartDate: new Date(),
            error: true
          });
        }
      })
      .catch(error => {
        this.setState({
          ProjectID: 1118,
          ClientDescription: "",
          Duration: 8,
          StartDate: new Date(),
          error: true
        });
        console.log(error);
      });

    console.log(data);
  };

  getProfileInfo = () => {
    const userId = JSON.parse(localStorage.getItem("UserId"));
    axios
      .get(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GetEmployeeInformation/" +
          userId,
        { headers: { AptifyAuthorization: TokenId } }
      )
      .then(response => {
        if (response.data !== null) {
          console.log(response.data);
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

  render() {
    const { StartDate, ProjectID, ClientDescription, Duration } = this.state;

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
                <i className="fa fa-plus"></i> Add Leave
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Annual Leave</h6>
              <h4>12</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Medical Leave</h6>
              <h4>3</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Other Leave</h6>
              <h4>4</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Remaining Leave</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Leave Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>No of Days</th>
                    <th>Reason</th>
                    <th className="text-center">Status</th>
                    <th>Approved by</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Casual Leave</td>
                    <td>8 Mar 2019</td>
                    <td>9 Mar 2019</td>
                    <td>2 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="#"
                        >
                          <i className="fa fa-dot-circle-o text-purple"></i> New
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar avatar-xs">
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                        </a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
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
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="add_leave" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Leave</h5>
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
                    value={Duration}
                    name="Duration"
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
                    name="ClientDescription"
                    className="form-control"
                    value={ClientDescription}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={() => this.leaveRequest()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
