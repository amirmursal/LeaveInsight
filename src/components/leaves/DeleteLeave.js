import React from "react";
import axios from "axios";
import { serverUrl } from "../../config";
import { UserConsumer } from "../provider/UserProvider";

export default class DeleteLeave extends React.Component {
  /**
   * function for deleting leave request
   * @param leaveid
   * @param getUser
   */

  deleteLeave = (leaveid, getUser) => {
    const TokenId = JSON.parse(localStorage.getItem("TokenId"));
    axios
      .delete(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/EmployeeWorkSchedules",

        {
          headers: {
            AptifyAuthorization: "DomainWithContainer " + TokenId,
          },
          data: {
            ID: parseInt(leaveid),
          },
        }
      )
      .then((response) => {
        getUser();
        this.props.toggleDeleteLeaveDialog();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const show = this.props.open
      ? "modal custom-modal fade show"
      : "modal custom-modal fade";

    let styles = this.props.open ? { display: "block" } : { display: "none" };
    return (
      <UserConsumer>
        {({ getUser }) => (
          <div className={show} role="dialog" style={styles}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <h3>Are you sure to delete this leave ?</h3>

                  <div className="modal-btn delete-action">
                    <div className="row">
                      <div className="col-3">
                        <button
                          onClick={() =>
                            this.deleteLeave(this.props.leaveid, getUser)
                          }
                          className="btn btn-primary continue-btn"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="col-3">
                        <button
                          onClick={() => this.props.toggleDeleteLeaveDialog()}
                          className="btn btn-primary cancel-btn"
                        >
                          Cancel
                        </button>
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
