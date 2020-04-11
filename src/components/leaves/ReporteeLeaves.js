import React from "react";
import axios from "axios";
import moment from "moment";
import Loader from "../common/Loader";
import RejectLeave from "./RejectLeave";
import { serverUrl } from "../../config";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ReporteeLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRejectOpen: false,
      leave: null,
    };
  }
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
      Status: "Approved",
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * function takes care for toggle reject leave dialog
   */
  toggleRejectLeaveDialog = (leave) => {
    this.setState({
      isRejectOpen: !this.state.isRejectOpen,
      leave: leave,
    });
  };

  render() {
    const { isRejectOpen, leave } = this.state;
    const { user, getUser } = this.props;
    const columns = [
      {
        Header: "Employee",
        accessor: "Employee",
        filterMethod: (filter, row) =>
          row[filter.id].toUpperCase().startsWith(filter.value.toUpperCase()) ||
          row[filter.id].toUpperCase().endsWith(filter.value.toUpperCase()),
      },
      {
        Header: "Project",
        accessor: "Project",
        className: "text-center",
        filterMethod: (filter, row) =>
          row[filter.id].toUpperCase().startsWith(filter.value.toUpperCase()) ||
          row[filter.id].toUpperCase().endsWith(filter.value.toUpperCase()),
      },
      {
        Header: "Start Date",
        accessor: "StartDate",
        className: "text-center",
        filterable: false,
        Cell: (props) => (
          <React.Fragment>
            {moment(props.value).format("DD/MM/YYYY")}
          </React.Fragment>
        ),
      },
      {
        Header: "Description",
        accessor: "ClientDescription",
        filterable: false,
      },
      {
        Header: "Status",
        accessor: "Status",
        className: "text-center",
        sortable: false,
        filterable: false,
      },
      {
        Header: "Actions",
        accessor: "Status",
        sortable: false,
        filterable: false,
        className: "text-center",
        Cell: (props) => (
          <React.Fragment>
            <div>
              <button
                className="btn btn-primary btn-sm m-r-5"
                onClick={() =>
                  this.approveLeaveRequest(props.original.ID, getUser)
                }
              >
                <i className="fa fa-pencil m-r-5"></i> Approve
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.toggleRejectLeaveDialog(props.original.ID)}
              >
                <i className="fa fa-trash-o m-r-5"></i> Reject
              </button>
            </div>
          </React.Fragment>
        ),
      },
    ];

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
                <li className="breadcrumb-item active">Awaiting Actions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="stats-info">
              <h6>Planned Leaves</h6>
              <h4>
                {user.ReporteeLeaves !== undefined
                  ? user.ReporteeLeaves.length
                  : 0}
              </h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stats-info">
              <h6>Todays Absents</h6>
              <h4>
                {user.TodaysLeaves !== undefined ? user.TodaysLeaves.length : 0}
              </h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stats-info">
              <h6>Pending Requests</h6>
              <h4>
                {user.ReporteeAppliedLeaves !== undefined
                  ? user.ReporteeAppliedLeaves.length
                  : 0}
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_length">
              <label>
                {Array.isArray(user.ReporteeAppliedLeaves) &&
                user.ReporteeAppliedLeaves.length
                  ? "Pending Leaves"
                  : "No Pending leave request"}{" "}
              </label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6"></div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {Array.isArray(user.ReporteeAppliedLeaves) &&
            user.ReporteeAppliedLeaves.length ? (
              <ReactTable
                defaultPageSize={5}
                className="-striped -highlight"
                data={user.ReporteeAppliedLeaves}
                columns={columns}
                showPagination={true}
                filterable={true}
              />
            ) : (
              !Array.isArray(user.ReporteeAppliedLeaves) && <Loader />
            )}
          </div>
        </div>

        {isRejectOpen && (
          <React.Fragment>
            <RejectLeave
              leave={leave}
              open={isRejectOpen}
              toggleRejectLeaveDialog={() => this.toggleRejectLeaveDialog()}
            />
            <div className="modal-backdrop fade show"></div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
