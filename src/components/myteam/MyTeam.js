import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Loader from "../common/Loader";
import { UserConsumer } from "../provider/UserProvider";
import ApplyLeave from "../leaves/ApplyLeave";

export default class MyTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      leaveid: null,
    };
  }

  /**
   * function takes care for toggle apply leave dialog
   */
  toggleApplyLeaveDialog = (id) => {
    this.setState({
      isOpen: !this.state.isOpen,
      leaveid: id
    });
  };

  render() {
    const { isOpen, leaveid } = this.state;
    const columns = [
      {
        Header: "Employee",
        id: "Employee",
        accessor: (d) => d.FirstName + " " + d.LastName,
        filterMethod: (filter, row) =>
          row[filter.id].toUpperCase().startsWith(filter.value.toUpperCase()) ||
          row[filter.id].toUpperCase().endsWith(filter.value.toUpperCase()),
      },
      {
        Header: "CO Taken",
        accessor: "CompOff",
        className: "text-center",
        filterable: false,
      },
      {
        Header: "PTO Balance",
        accessor: "LeaveBalance",
        className: "text-center",
        filterable: false,
      },
      {
        Header: "PTO Taken",
        accessor: "LeaveTaken",
        className: "text-center",
        filterable: false,
      },
      {
        Header: "PTO Planned",
        accessor: "PTOPlanned",
        className: "text-center",
        filterable: false,
      },
      {
        Header: "Floater Holidays",
        accessor: "FloaterHoliday",
        className: "text-center",
        filterable: false,
      },
      {
        Header: "Actions",
        id: "Actions",
        accessor: (d) => d.Status,
        sortable: false,
        filterable: false,
        className: "text-center",
        Cell: (props) => {
          return (
            <React.Fragment>
              <button
                className="btn btn-success btn-sm m-r-5"
                onClick={() => this.toggleApplyLeaveDialog(props.original.ID)}
              >
                <i className="fa fa-plus m-r-5"></i> Apply Leave
              </button>
            </React.Fragment >
          );
        },
      },
    ];
    return (
      <UserConsumer>
        {({ user }) => (
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
                  <ReactTable
                    defaultPageSize={5}
                    className="-striped -highlight"
                    data={user.MyTeam}
                    columns={columns}
                    showPagination={true}
                    filterable={true}
                  />
                </div>
              </div>
            </div>
            {isOpen && (
              <React.Fragment>
                <ApplyLeave
                  open={isOpen}
                  leaveid={leaveid}
                  toggleApplyLeaveDialog={() => this.toggleApplyLeaveDialog()}
                />
                <div className="modal-backdrop fade show"></div>
              </React.Fragment>
            )}
          </div>
        )}

      </UserConsumer>
    );
  }
}
