import React from "react";
import { UserConsumer } from "../provider/UserProvider";

export default class MyTeam extends React.Component {
  /**
   * function takes care for rendering my team data
   * @param MyTeam array
   * @param getUser
   */
  renderMyTeam = (myTeam, getUser) => {
    return myTeam.map((element, i) => {
      return (
        <tr key={i}>
          <td>
            {element.FirstName} {element.LastName}
          </td>
          <td>{element.CompOff}</td>
          <td>{element.LeaveBalance}</td>
          <td>{element.LeaveTaken}</td>
          <td>{element.PTOPlanned}</td>
          <td>{element.PTOPlanned}</td>
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
                  {Array.isArray(user.MyTeam) && user.MyTeam.length ? (
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
                            <th>CO Taken</th>
                            <th>PTO Balance</th>
                            <th>PTO Taken</th>
                            <th>PTO Planned</th>
                            <th>Floater Holidays</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderMyTeam(user.MyTeam, getUser)}</tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}
