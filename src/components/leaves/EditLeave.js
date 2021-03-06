import React from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";

export default class EditLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: parseInt(this.props.leave.ID),
      EmpID: parseInt(this.props.leave.EmployeeID),
      ProjectID: parseInt(this.props.leave.ProjectID),
      Description: this.props.leave.ClientDescription,
      WorkHours: parseInt(Math.round(this.props.leave.Duration)),
      StartDate: new Date(this.props.leave.StartDate),
      error: false,
      message: null,
      isDisabled: false,
    };
  }

  /**
   * Date change handler for react-datepicker
   * @param date
   */
  handleDateChange = (date) => {
    this.setState({
      StartDate: date,
    });
  };

  /**
   * common input change handler for input and select
   * @param event
   */
  handleChange = (event) => {
    if (event.target.name === "ProjectID") {
      this.setState({
        [event.target.name]: parseInt(event.target.value),
        message: null,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  /**
* Disable Enter key for creating bad json format
* @param event
*/
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };


  /**
   * function takes care for applying leave request
   * @param user
   * @param getUser
   */
  applyLeave = (user, getUser) => {
    const description = this.state.Description.trim();
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    this.setState({
      isDisabled: true,
    });
    let data = {
      ID: parseInt(this.props.leave.ID),
      Type: "Project",
      Status: "Applied",
      EmployeeID: parseInt(user.EmpID),
      ProjectID: this.state.ProjectID,
      Description: description,
      WorkHours: this.state.WorkHours,
      StartDate: moment(this.state.StartDate).format("MM/DD/YYYY"),
      EndDate: moment(this.state.StartDate).format("MM/DD/YYYY"),
    };
    axios
      .put(
        " https://" +
        serverUrl +
        "/AptifyServicesAPI/services/EmployeeWorkSchedules",
        data,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        //getUser();
        // this function commented becuase it is updateing whole react table along
        // with parent component which leads to closing existing dialog
        this.setState({
          ProjectID: this.state.ProjectID,
          Description: this.state.Description,
          WorkHours: this.state.WorkHours,
          isDisabled: false,
          StartDate: this.state.StartDate,
          message: "Leave Edited successfully",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      message: null,
    });
  };

  /**
   * function takes care for editing leave request with leave validation
   * @param user
   * @param getUser
   */
  leaveRequest = (user, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    axios
      .get(
        " https://" +
        serverUrl +
        "/AptifyServicesAPI/services/DataObjects/spValidateEmployeeLeavesByID__c?ID=" +
        this.state.ID +
        "&EmpID=" +
        parseInt(user.EmpID) +
        "&StartDate=" +
        moment(this.state.StartDate).format("MM/DD/YYYY") +
        "&WorkHours=" +
        this.state.WorkHours,
        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.results[0].IsExist !== 1) {
          this.applyLeave(user, getUser);
        } else {
          this.setState({
            ProjectID: this.state.ProjectID,
            Description: this.state.Description,
            WorkHours: this.state.WorkHours,
            isDisabled: false,
            StartDate: this.state.StartDate,
            message:
              "Already leave exists for this date. Please ensure leave entry should not exceed more than 8hrs.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  closeEditDialog = (getUser) => {
    this.props.toggleEditLeaveDialog();
    getUser();
  };

  render() {
    const {
      StartDate,
      ProjectID,
      Description,
      WorkHours,
      message,
      isDisabled,
    } = this.state;

    const isWeekday = (date) => {
      const day = date.getDay();
      return day !== 0 && day !== 6;
    };
    const show = this.props.open
      ? "modal custom-modal fade show"
      : "modal custom-modal fade";

    let styles = this.props.open ? { display: "block" } : { display: "none" };

    const isSubmitDisabled =
      !Description ||
      isDisabled ||
      Description.trim() === "" ||
      Description.trim().length < 10;

    //const excludeDates = [new Date()];
    return (
      <UserConsumer>
        {({ user, getUser }) => (
          <div className={show} role="dialog" style={styles}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Leave</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.closeEditDialog(getUser)}
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
                      <option value="4852">Compensatory Off</option>
                      <option value="310">Floater Holiday</option>
                      <option value="5967">Maternity Leave</option>
                      <option value="5973">Paternity Leave</option>
                      <option value="5966">Bereavement Leave</option>
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
                        filterDate={isWeekday}
                        //excludeDates={excludeDates}
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
                      rows="2"
                      name="Description"
                      className="form-control"
                      value={Description}
                      onChange={this.handleChange}
                      maxLength="200"
                      onKeyDown={(event) =>
                        this.handleKeyDown(event)
                      }
                    ></textarea>
                  </div>
                  <p>
                    {message && message !== "Leave Edited successfully" ? (
                      <span className="text-danger">{message}</span>
                    ) : (
                        <span className="text-success">{message}</span>
                      )}
                  </p>
                  <p>
                    {ProjectID !== 1118 ? (
                      <span className="text-warning">
                        Refer{" "}
                        <a
                          href="https://confluence.aptify.com/display/CUL/Aptify+India+Policies+and+Procedures+Manual"
                          target="_blank"
                        >
                          policy{" "}
                        </a>{" "}
                        for Bereavement/Paternity/Maternity/Comp Off/Floater
                      </span>
                    ) : null}
                  </p>
                  <div className="submit-section">
                    <button
                      disabled={isSubmitDisabled}
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
        )}
      </UserConsumer>
    );
  }
}
