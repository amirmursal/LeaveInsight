import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../config";
import Avatar from "../../assests/images/avatar.png";

export default class Profile extends React.Component {
  getProfileInfo = () => {
    const userId = JSON.parse(localStorage.getItem("UserId"));
    axios
      .get(
        " https://" +
          serverUrl +
          "/AptifyServicesAPI/services/GetEmployeeInformation/" +
          userId
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
    return (
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/employeedashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="profile-img-wrap">
                    <div className="profile-img">
                      <a href="#">
                        <img alt="" src={Avatar} />
                      </a>
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-info-left">
                          <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                          <h6 className="text-muted">UI/UX Design Team</h6>
                          <small className="text-muted">Web Designer</small>
                          <div className="staff-id">Employee ID : FT-0001</div>
                          <div className="small doj text-muted">
                            Date of Join : 1st Jan 2013
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <ul className="personal-info">
                          <li>
                            <div className="title">Phone:</div>
                            <div className="text">
                              <span>9876543210</span>
                            </div>
                          </li>
                          <li>
                            <div className="title">Email:</div>
                            <div className="text">
                              <span>johndoe@example.com</span>
                            </div>
                          </li>
                          <li>
                            <div className="title">Birthday:</div>
                            <div className="text">24th July</div>
                          </li>

                          <li>
                            <div className="title">Reports to:</div>
                            <div className="text">
                              <div className="avatar-box">
                                <div className="avatar avatar-xs">
                                  <img src={Avatar} alt="" />
                                </div>
                              </div>
                              <span>Jeffery Lalor</span>
                            </div>
                          </li>
                        </ul>
                      </div>
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
