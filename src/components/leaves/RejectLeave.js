import React from "react";
import axios from "axios";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";

export default class RejectLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      StatusDescription: "",
    };
  }

  /**
   * common input change handler for input and select
   * @param event
   */
  handleChange = (event) => {
    this.setState({
      StatusDescription: event.target.value,
    });
  };

  /**
   * function takes care for reject leave request
   * @param user
   * @param getUser
   */
  rejectLeaveRequest = (getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    let data = {
      ID: parseInt(this.props.leave),
      EntityName: "Employee Work Schedules",
      Status: "Rejected",
      StatusDescription: this.state.StatusDescription,
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
        this.props.toggleRejectLeaveDialog();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { StatusDescription, isDisabled } = this.state;

    const show = this.props.open
      ? "modal custom-modal fade show"
      : "modal custom-modal fade";

    let styles = this.props.open ? { display: "block" } : { display: "none" };

    const isSubmitDisabled =
      !StatusDescription ||
      isDisabled ||
      StatusDescription.trim() === "" ||
      StatusDescription.trim().length < 10;

    return (
      <UserConsumer>
        {({ getUser }) => (
          <div className={show} role="dialog" style={styles}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Reject Leave</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.props.toggleRejectLeaveDialog()}
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>
                      Leave Reject Reason <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows="2"
                      name="Description"
                      className="form-control"
                      value={StatusDescription}
                      onChange={this.handleChange}
                      maxLength="200"
                    ></textarea>
                  </div>
                  <div className="submit-section">
                    <button
                      disabled={isSubmitDisabled}
                      className="btn btn-primary submit-btn"
                      onClick={() => this.rejectLeaveRequest(getUser)}
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
