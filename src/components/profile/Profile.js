import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../provider/UserProvider";
import Avatar from "../../assests/images/avatar.png";

export default class Profile extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({ user }) => (
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Dashboard</Link>
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
                              <h3 className="user-name m-t-0 mb-0">
                                {user.FirstLast}
                              </h3>
                              <h6 className="text-muted">R & D Team</h6>
                              <small className="text-muted">
                                Software Engineer- Front End Development
                              </small>
                              <div className="staff-id">
                                Employee ID : {user.EmpID}
                              </div>
                              <div className="small doj text-muted">
                                Date of Join : 18<sup>th</sup> March 2019
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <ul className="personal-info">
                              <li>
                                <div className="title">Phone:</div>
                                <div className="text">
                                  <span>9881151316</span>
                                </div>
                              </li>
                              <li>
                                <div className="title">Email:</div>
                                <div className="text">
                                  <span>{user.Email1}</span>
                                </div>
                              </li>
                              <li>
                                <div className="title">Birthday:</div>
                                <div className="text">
                                  25<sup>th</sup> March
                                </div>
                              </li>

                              <li>
                                <div className="title">Reports to:</div>
                                <div className="text">
                                  <div className="avatar-box">
                                    <div className="avatar avatar-xs">
                                      <img src={Avatar} alt="" />
                                    </div>
                                  </div>
                                  <span>{user.Supervisor}</span>
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
        )}
      </UserConsumer>
    );
  }
}
