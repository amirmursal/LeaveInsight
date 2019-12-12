import React from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { serverUrl } from "../../config";

export default class MyLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AppliedLeaves: [],
      EmpID: null,
      EmployeeName: "",
      ProjectID: 1118,
      Description: "",
      WorkHours: 8,
      StartDate: new Date(),
      error: false,
      message: null
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
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    const EmpID = JSON.parse(localStorage.getItem("EmpID"));

    let data = {
      ID: -1,
      EntityName: "Employee Work Schedules",
      Type: "Project",
      Status: "Applied",
      EmployeeID: parseInt(EmpID),
      ProjectID: this.state.ProjectID,
      Description: this.state.Description,
      WorkHours: this.state.WorkHours,
      StartDate: moment(this.state.StartDate).format("DD/MM/YYYY"),
      EndDate: moment(this.state.StartDate).format("DD/MM/YYYY")
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
          this.setState({
            EmpID: null,
            ProjectID: 1118,
            Description: "",
            WorkHours: 8,
            StartDate: new Date(),
            message: "Leave applied successfully"
          });
          this.getProfileInfo();
        } else {
          this.setState({
            EmpID: null,
            ProjectID: 1118,
            Description: "",
            WorkHours: 8,
            StartDate: new Date(),
            error: true,
            message: null
          });
        }
      })
      .catch(error => {
        this.setState({
          EmpID: null,
          ProjectID: 1118,
          Description: "",
          WorkHours: 8,
          StartDate: new Date(),
          error: true,
          message: null
        });
        console.log(error);
      });
    this.setState({
      message: null
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
          localStorage.setItem(
            "EmpID",
            JSON.stringify(response.data.Employee[0].EmpID)
          );
          console.log(response.data.Employee[0]);
          this.setState({
            AppliedLeaves: response.data.Employee[0].AppliedLeaves,
            EmpID: response.data.Employee[0].EmpID,
            EmployeeName: response.data.Employee[0].FirstName
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

  renderAppliedLeaves = () => {
    return this.state.AppliedLeaves.map((element, i) => {
      return (
        <tr key={i}>
          <td>{moment(element.StartDAt).format("DD/MM/YYYY")}</td>
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
      );
    });
  };

  render() {
    const {
      StartDate,
      ProjectID,
      Description,
      WorkHours,
      EmployeeName,
      message
    } = this.state;

    return (
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Welcome {EmployeeName}!</h3>
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
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Annual Leave</h6>
              <h4>12</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Applied Leave</h6>
              <h4>3</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Availed Leave</h6>
              <h4>4</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Leave Balance</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
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
                <tbody>{this.renderAppliedLeaves()}</tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="add_leave" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
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
                {message && <span>{message}</span>}

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

        <div id="edit_leave" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
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
                    onClick={() => this.leaveRequest()}
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
                  <h3>Delete Leave</h3>
                  <p>Are you sure want to Cancel this leave?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a href="" className="btn btn-primary continue-btn">
                        Delete
                      </a>
                    </div>
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
    );
  }
}
