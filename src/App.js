import React from "react";

export default class App extends React.Component {

	render() {
		return (
			<div className="main-wrapper">

				<div className="header">


					<div className="header-left">
						<a href="index.html" className="logo">
							<img src="../src/resource/images/logo.png" width="40" height="40" alt="" />
						</a>
					</div>


					<a id="toggle_btn" href="#ChangeThis">
						<span className="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>


					<div className="page-title-box">
						<h3>Dreamguy's Technologies</h3>
					</div>


					<a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars"></i></a>


					<ul className="nav user-menu">


						<li className="nav-item">
							<div className="top-nav-search">
								<a href="#ChangeThis" className="responsive-search">
									<i className="fa fa-search"></i>
								</a>
								<form action="search.html">
									<input className="form-control" type="text" placeholder="Search here" />
									<button className="btn" type="submit"><i className="fa fa-search"></i></button>
								</form>
							</div>
						</li>



						<li className="nav-item dropdown">
							<a href="#ChangeThis" className="dropdown-toggle nav-link" data-toggle="dropdown">
								<i className="fa fa-bell-o"></i> <span className="badge badge-pill">3</span>
							</a>
							<div className="dropdown-menu notifications">
								<div className="topnav-dropdown-header">
									<span className="notification-title">Notifications</span>
									<a href="#ChangeThis" className="clear-noti"> Clear All </a>
								</div>
								<div className="noti-content">
									<ul className="notification-list">
										<li className="notification-message">
											<a href="activities.html">
												<div className="media">
													<span className="avatar">
														<img alt="" src="assets/img/profiles/avatar-02.jpg" />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
														<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities.html">
												<div className="media">
													<span className="avatar">
														<img alt="" src="assets/img/profiles/avatar-03.jpg" />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
														<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities.html">
												<div className="media">
													<span className="avatar">
														<img alt="" src="assets/img/profiles/avatar-06.jpg" />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
														<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities.html">
												<div className="media">
													<span className="avatar">
														<img alt="" src="assets/img/profiles/avatar-17.jpg" />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
														<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities.html">
												<div className="media">
													<span className="avatar">
														<img alt="" src="assets/img/profiles/avatar-13.jpg" />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
														<p className="noti-time"><span className="notification-time">2 days ago</span></p>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
								<div className="topnav-dropdown-footer">
									<a href="activities.html">View all Notifications</a>
								</div>
							</div>
						</li>

						<li className="nav-item dropdown has-arrow main-drop">
							<a href="#ChangeThis" className="dropdown-toggle nav-link" data-toggle="dropdown">
								<span className="user-img"><img src="assets/img/profiles/avatar-21.jpg" alt="" />
									<span className="status online"></span></span>
								<span>Admin</span>
							</a>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="profile.html">My Profile</a>
								<a className="dropdown-item" href="settings.html">Settings</a>
								<a className="dropdown-item" href="login.html">Logout</a>
							</div>
						</li>
					</ul>

					<div className="dropdown mobile-user-menu">
						<a href="#ChangeThis" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="profile.html">My Profile</a>
							<a className="dropdown-item" href="settings.html">Settings</a>
							<a className="dropdown-item" href="login.html">Logout</a>
						</div>
					</div>


				</div>

				<div className="sidebar" id="sidebar">
					<div className="sidebar-inner slimscroll">
						<div id="sidebar-menu" className="sidebar-menu">
							<ul>
								<li className="menu-title">
									<span>Main</span>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-dashboard"></i> <span> Dashboard</span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a className="active" href="index.html">Admin Dashboard</a></li>
										<li><a href="employee-dashboard.html">Employee Dashboard</a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-cube"></i> <span> Apps</span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="chat.html">Chat</a></li>
										<li className="submenu">
											<a href="#ChangeThis"><span> Calls</span> <span className="menu-arrow"></span></a>
											<ul style={{ display: "none" }}>
												<li><a href="voice-call.html">Voice Call</a></li>
												<li><a href="video-call.html">Video Call</a></li>
												<li><a href="outgoing-call.html">Outgoing Call</a></li>
												<li><a href="incoming-call.html">Incoming Call</a></li>
											</ul>
										</li>
										<li><a href="events.html">Calendar</a></li>
										<li><a href="contacts.html">Contacts</a></li>
										<li><a href="inbox.html">Email</a></li>
										<li><a href="file-manager.html">File Manager</a></li>
									</ul>
								</li>
								<li className="menu-title">
									<span>Employees</span>
								</li>
								<li className="submenu">
									<a href="#ChangeThis" className="noti-dot"><i className="la la-user"></i> <span> Employees</span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="employees.html">All Employees</a></li>
										<li><a href="holidays.html">Holidays</a></li>
										<li><a href="leaves.html">Leaves (Admin) <span className="badge badge-pill bg-primary float-right">1</span></a></li>
										<li><a href="leaves-employee.html">Leaves (Employee)</a></li>
										<li><a href="leave-settings.html">Leave Settings</a></li>
										<li><a href="attendance.html">Attendance (Admin)</a></li>
										<li><a href="attendance-employee.html">Attendance (Employee)</a></li>
										<li><a href="departments.html">Departments</a></li>
										<li><a href="designations.html">Designations</a></li>
										<li><a href="timesheet.html">Timesheet</a></li>
										<li><a href="overtime.html">Overtime</a></li>
									</ul>
								</li>
								<li>
									<a href="clients.html"><i className="la la-users"></i> <span>Clients</span></a>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-rocket"></i> <span> Projects</span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="projects.html">Projects</a></li>
										<li><a href="tasks.html">Tasks</a></li>
										<li><a href="task-board.html">Task Board</a></li>
									</ul>
								</li>
								<li>
									<a href="leads.html"><i className="la la-user-secret"></i> <span>Leads</span></a>
								</li>
								<li>
									<a href="tickets.html"><i className="la la-ticket"></i> <span>Tickets</span></a>
								</li>
								<li className="menu-title">
									<span>HR</span>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-files-o"></i> <span> Accounts </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="estimates.html">Estimates</a></li>
										<li><a href="invoices.html">Invoices</a></li>
										<li><a href="payments.html">Payments</a></li>
										<li><a href="expenses.html">Expenses</a></li>
										<li><a href="provident-fund.html">Provident Fund</a></li>
										<li><a href="taxes.html">Taxes</a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-money"></i> <span> Payroll </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="salary.html"> Employee Salary </a></li>
										<li><a href="salary-view.html"> Payslip </a></li>
										<li><a href="payroll-items.html"> Payroll Items </a></li>
									</ul>
								</li>
								<li>
									<a href="policies.html"><i className="la la-file-pdf-o"></i> <span>Policies</span></a>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-pie-chart"></i> <span> Reports </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="expense-reports.html"> Expense Report </a></li>
										<li><a href="invoice-reports.html"> Invoice Report </a></li>
									</ul>
								</li>
								<li className="menu-title">
									<span>Performance</span>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-graduation-cap"></i> <span> Performance </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="performance-indicator.html"> Performance Indicator </a></li>
										<li><a href="performance.html"> Performance Review </a></li>
										<li><a href="performance-appraisal.html"> Performance Appraisal </a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-crosshairs"></i> <span> Goals </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="goal-tracking.html"> Goal List </a></li>
										<li><a href="goal-type.html"> Goal Type </a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-edit"></i> <span> Training </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="training.html"> Training List </a></li>
										<li><a href="trainers.html"> Trainers</a></li>
										<li><a href="training-type.html"> Training Type </a></li>
									</ul>
								</li>
								<li><a href="promotion.html"><i className="la la-bullhorn"></i> <span>Promotion</span></a></li>
								<li><a href="resignation.html"><i className="la la-external-link-square"></i> <span>Resignation</span></a></li>
								<li><a href="termination.html"><i className="la la-times-circle"></i> <span>Termination</span></a></li>
								<li className="menu-title">
									<span>Administration</span>
								</li>
								<li>
									<a href="assets.html"><i className="la la-object-ungroup"></i> <span>Assets</span></a>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-briefcase"></i> <span> Jobs </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="jobs.html"> Manage Jobs </a></li>
										<li><a href="job-applicants.html"> Applied Candidates </a></li>
									</ul>
								</li>
								<li>
									<a href="knowledgebase.html"><i className="la la-question"></i> <span>Knowledgebase</span></a>
								</li>
								<li>
									<a href="activities.html"><i className="la la-bell"></i> <span>Activities</span></a>
								</li>
								<li>
									<a href="users.html"><i className="la la-user-plus"></i> <span>Users</span></a>
								</li>
								<li>
									<a href="settings.html"><i className="la la-cog"></i> <span>Settings</span></a>
								</li>
								<li className="menu-title">
									<span>Pages</span>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-user"></i> <span> Profile </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="profile.html"> Employee Profile </a></li>
										<li><a href="client-profile.html"> Client Profile </a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-key"></i> <span> Authentication </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="login.html"> Login </a></li>
										<li><a href="register.html"> Register </a></li>
										<li><a href="forgot-password.html"> Forgot Password </a></li>
										<li><a href="otp.html"> OTP </a></li>
										<li><a href="lock-screen.html"> Lock Screen </a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-exclamation-triangle"></i> <span> Error Pages </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="error-404.html">404 Error </a></li>
										<li><a href="error-500.html">500 Error </a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-columns"></i> <span> Pages </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="search.html"> Search </a></li>
										<li><a href="faq.html"> FAQ </a></li>
										<li><a href="terms.html"> Terms </a></li>
										<li><a href="privacy-policy.html"> Privacy Policy </a></li>
										<li><a href="blank-page.html"> Blank Page </a></li>
									</ul>
								</li>
								<li className="menu-title">
									<span>UI Interface</span>
								</li>
								<li>
									<a href="components.html"><i className="la la-puzzle-piece"></i> <span>Components</span></a>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-object-group"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="form-basic-inputs.html">Basic Inputs </a></li>
										<li><a href="form-input-groups.html">Input Groups </a></li>
										<li><a href="form-horizontal.html">Horizontal Form </a></li>
										<li><a href="form-vertical.html"> Vertical Form </a></li>
										<li><a href="form-mask.html"> Form Mask </a></li>
										<li><a href="form-validation.html"> Form Validation </a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-table"></i> <span> Tables </span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li><a href="tables-basic.html">Basic Tables </a></li>
										<li><a href="data-tables.html">Data Table </a></li>
									</ul>
								</li>
								<li className="menu-title">
									<span>Extras</span>
								</li>
								<li>
									<a href="#ChangeThis"><i className="la la-file-text"></i> <span>Documentation</span></a>
								</li>
								<li>
									<a href="#ChangeThis"><i className="la la-info"></i> <span>Change Log</span> <span className="badge badge-primary ml-auto">v3.2</span></a>
								</li>
								<li className="submenu">
									<a href="#ChangeThis"><i className="la la-share-alt"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
									<ul style={{ display: "none" }}>
										<li className="submenu">
											<a href="#ChangeThis"> <span>Level 1</span> <span className="menu-arrow"></span></a>
											<ul style={{ display: "none" }}>
												<li><a href="#ChangeThis"><span>Level 2</span></a></li>
												<li className="submenu">
													<a href="#ChangeThis"> <span> Level 2</span> <span className="menu-arrow"></span></a>
													<ul style={{ display: "none" }}>
														<li><a href="#ChangeThis">Level 3</a></li>
														<li><a href="#ChangeThis">Level 3</a></li>
													</ul>
												</li>
												<li><a href="#ChangeThis"> <span>Level 2</span></a></li>
											</ul>
										</li>
										<li>
											<a href="#ChangeThis"> <span>Level 1</span></a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="page-wrapper">


					<div className="content container-fluid">


						<div className="page-header">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="page-title">Welcome Admin!</h3>
									<ul className="breadcrumb">
										<li className="breadcrumb-item active">Dashboard</li>
									</ul>
								</div>
							</div>
						</div>


						<div className="row">
							<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
								<div className="card dash-widget">
									<div className="card-body">
										<span className="dash-widget-icon"><i className="fa fa-cubes"></i></span>
										<div className="dash-widget-info">
											<h3>112</h3>
											<span>Projects</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
								<div className="card dash-widget">
									<div className="card-body">
										<span className="dash-widget-icon"><i className="fa fa-usd"></i></span>
										<div className="dash-widget-info">
											<h3>44</h3>
											<span>Clients</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
								<div className="card dash-widget">
									<div className="card-body">
										<span className="dash-widget-icon"><i className="fa fa-diamond"></i></span>
										<div className="dash-widget-info">
											<h3>37</h3>
											<span>Tasks</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
								<div className="card dash-widget">
									<div className="card-body">
										<span className="dash-widget-icon"><i className="fa fa-user"></i></span>
										<div className="dash-widget-info">
											<h3>218</h3>
											<span>Employees</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="row">
									<div className="col-md-6 text-center">
										<div className="card">
											<div className="card-body">
												<h3 className="card-title">Total Revenue</h3>
												<div id="bar-charts"></div>
											</div>
										</div>
									</div>
									<div className="col-md-6 text-center">
										<div className="card">
											<div className="card-body">
												<h3 className="card-title">Sales Overview</h3>
												<div id="line-charts"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="card-group m-b-30">
									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between mb-3">
												<div>
													<span className="d-block">New Employees</span>
												</div>
												<div>
													<span className="text-success">+10%</span>
												</div>
											</div>
											<h3 className="mb-3">10</h3>
											<div className="progress mb-2" style={{ height: "5px" }}>
												<div className="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p className="mb-0">Overall Employees 218</p>
										</div>
									</div>

									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between mb-3">
												<div>
													<span className="d-block">Earnings</span>
												</div>
												<div>
													<span className="text-success">+12.5%</span>
												</div>
											</div>
											<h3 className="mb-3">$1,42,300</h3>
											<div className="progress mb-2" style={{ height: "5px" }}>
												<div className="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p className="mb-0">Previous Month <span className="text-muted">$1,15,852</span></p>
										</div>
									</div>

									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between mb-3">
												<div>
													<span className="d-block">Expenses</span>
												</div>
												<div>
													<span className="text-danger">-2.8%</span>
												</div>
											</div>
											<h3 className="mb-3">$8,500</h3>
											<div className="progress mb-2" style={{ height: "5px" }}>
												<div className="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p className="mb-0">Previous Month <span className="text-muted">$7,500</span></p>
										</div>
									</div>

									<div className="card">
										<div className="card-body">
											<div className="d-flex justify-content-between mb-3">
												<div>
													<span className="d-block">Profit</span>
												</div>
												<div>
													<span className="text-danger">-75%</span>
												</div>
											</div>
											<h3 className="mb-3">$1,12,000</h3>
											<div className="progress mb-2" style={{ height: "5px" }}>
												<div className="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p className="mb-0">Previous Month <span className="text-muted">$1,42,000</span></p>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="row">
							<div className="col-md-12 col-lg-12 col-xl-4 d-flex">
								<div className="card flex-fill dash-statistics">
									<div className="card-body">
										<h5 className="card-title">Statistics</h5>
										<div className="stats-list">
											<div className="stats-info">
												<p>Today Leave <strong>4 <small>/ 65</small></strong></p>
												<div className="progress">
													<div className="progress-bar bg-primary" role="progressbar" style={{ width: "31%" }} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="stats-info">
												<p>Pending Invoice <strong>15 <small>/ 92</small></strong></p>
												<div className="progress">
													<div className="progress-bar bg-warning" role="progressbar" style={{ width: "31%" }} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="stats-info">
												<p>Completed Projects <strong>85 <small>/ 112</small></strong></p>
												<div className="progress">
													<div className="progress-bar bg-success" role="progressbar" style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="stats-info">
												<p>Open Tickets <strong>190 <small>/ 212</small></strong></p>
												<div className="progress">
													<div className="progress-bar bg-danger" role="progressbar" style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="stats-info">
												<p>Closed Tickets <strong>22 <small>/ 212</small></strong></p>
												<div className="progress">
													<div className="progress-bar bg-info" role="progressbar" style={{ width: "22%" }} aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-12 col-lg-6 col-xl-4 d-flex">
								<div className="card flex-fill">
									<div className="card-body">
										<h4 className="card-title">Task Statistics</h4>
										<div className="statistics">
											<div className="row">
												<div className="col-md-6 col-6 text-center">
													<div className="stats-box mb-4">
														<p>Total Tasks</p>
														<h3>385</h3>
													</div>
												</div>
												<div className="col-md-6 col-6 text-center">
													<div className="stats-box mb-4">
														<p>Overdue Tasks</p>
														<h3>19</h3>
													</div>
												</div>
											</div>
										</div>
										<div className="progress mb-4">
											<div className="progress-bar bg-purple" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
											<div className="progress-bar bg-warning" role="progressbar" style={{ width: "22%" }} aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">22%</div>
											<div className="progress-bar bg-success" role="progressbar" style={{ width: "24%" }} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">24%</div>
											<div className="progress-bar bg-danger" role="progressbar" style={{ width: "26%" }} aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">21%</div>
											<div className="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">10%</div>
										</div>
										<div>
											<p><i className="fa fa-dot-circle-o text-purple mr-2"></i>Completed Tasks <span className="float-right">166</span></p>
											<p><i className="fa fa-dot-circle-o text-warning mr-2"></i>Inprogress Tasks <span className="float-right">115</span></p>
											<p><i className="fa fa-dot-circle-o text-success mr-2"></i>On Hold Tasks <span className="float-right">31</span></p>
											<p><i className="fa fa-dot-circle-o text-danger mr-2"></i>Pending Tasks <span className="float-right">47</span></p>
											<p className="mb-0"><i className="fa fa-dot-circle-o text-info mr-2"></i>Review Tasks <span className="float-right">5</span></p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-12 col-lg-6 col-xl-4 d-flex">
								<div className="card flex-fill">
									<div className="card-body">
										<h4 className="card-title">Today Absent <span className="badge bg-inverse-danger ml-2">5</span></h4>
										<div className="leave-info-box">
											<div className="media align-items-center">
												<a href="profile.html" className="avatar"><img alt="" src="assets/img/user.jpg" /></a>
												<div className="media-body">
													<div className="text-sm my-0">Martin Lewis</div>
												</div>
											</div>
											<div className="row align-items-center mt-3">
												<div className="col-6">
													<h6 className="mb-0">4 Sep 2019</h6>
													<span className="text-sm text-muted">Leave Date</span>
												</div>
												<div className="col-6 text-right">
													<span className="badge bg-inverse-danger">Pending</span>
												</div>
											</div>
										</div>
										<div className="leave-info-box">
											<div className="media align-items-center">
												<a href="profile.html" className="avatar"><img alt="" src="assets/img/user.jpg" /></a>
												<div className="media-body">
													<div className="text-sm my-0">Martin Lewis</div>
												</div>
											</div>
											<div className="row align-items-center mt-3">
												<div className="col-6">
													<h6 className="mb-0">4 Sep 2019</h6>
													<span className="text-sm text-muted">Leave Date</span>
												</div>
												<div className="col-6 text-right">
													<span className="badge bg-inverse-success">Approved</span>
												</div>
											</div>
										</div>
										<div className="load-more text-center">
											<a className="text-dark" href="#ChangeThis">Load More</a>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="row">
							<div className="col-md-6 d-flex">
								<div className="card card-table flex-fill">
									<div className="card-header">
										<h3 className="card-title mb-0">Invoices</h3>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-nowrap custom-table mb-0">
												<thead>
													<tr>
														<th>Invoice ID</th>
														<th>Client</th>
														<th>Due Date</th>
														<th>Total</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><a href="invoice-view.html">#INV-0001</a></td>
														<td>
															<h2><a href="#ChangeThis">Global Technologies</a></h2>
														</td>
														<td>11 Mar 2019</td>
														<td>$380</td>
														<td>
															<span className="badge bg-inverse-warning">Partially Paid</span>
														</td>
													</tr>
													<tr>
														<td><a href="invoice-view.html">#INV-0002</a></td>
														<td>
															<h2><a href="#ChangeThis">Delta Infotech</a></h2>
														</td>
														<td>8 Feb 2019</td>
														<td>$500</td>
														<td>
															<span className="badge bg-inverse-success">Paid</span>
														</td>
													</tr>
													<tr>
														<td><a href="invoice-view.html">#INV-0003</a></td>
														<td>
															<h2><a href="#ChangeThis">Cream Inc</a></h2>
														</td>
														<td>23 Jan 2019</td>
														<td>$60</td>
														<td>
															<span className="badge bg-inverse-danger">Unpaid</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer">
										<a href="invoices.html">View all invoices</a>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex">
								<div className="card card-table flex-fill">
									<div className="card-header">
										<h3 className="card-title mb-0">Payments</h3>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table custom-table table-nowrap mb-0">
												<thead>
													<tr>
														<th>Invoice ID</th>
														<th>Client</th>
														<th>Payment Type</th>
														<th>Paid Date</th>
														<th>Paid Amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><a href="invoice-view.html">#INV-0001</a></td>
														<td>
															<h2><a href="#ChangeThis">Global Technologies</a></h2>
														</td>
														<td>Paypal</td>
														<td>11 Mar 2019</td>
														<td>$380</td>
													</tr>
													<tr>
														<td><a href="invoice-view.html">#INV-0002</a></td>
														<td>
															<h2><a href="#ChangeThis">Delta Infotech</a></h2>
														</td>
														<td>Paypal</td>
														<td>8 Feb 2019</td>
														<td>$500</td>
													</tr>
													<tr>
														<td><a href="invoice-view.html">#INV-0003</a></td>
														<td>
															<h2><a href="#ChangeThis">Cream Inc</a></h2>
														</td>
														<td>Paypal</td>
														<td>23 Jan 2019</td>
														<td>$60</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer">
										<a href="payments.html">View all payments</a>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 d-flex">
								<div className="card card-table flex-fill">
									<div className="card-header">
										<h3 className="card-title mb-0">Clients</h3>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table custom-table mb-0">
												<thead>
													<tr>
														<th>Name</th>
														<th>Email</th>
														<th>Status</th>
														<th className="text-right">Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<h2 className="table-avatar">
																<a href="#ChangeThis" className="avatar"><img alt="" src="assets/img/profiles/avatar-19.jpg" /></a>
																<a href="client-profile.html">Barry Cuda <span>CEO</span></a>
															</h2>
														</td>
														<td>barrycuda@example.com</td>
														<td>
															<div className="dropdown action-label">
																<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#ChangeThis" data-toggle="dropdown" aria-expanded="false">
																	<i className="fa fa-dot-circle-o text-success"></i> Active
															</a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
																</div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 className="table-avatar">
																<a href="#ChangeThis" className="avatar"><img alt="" src="assets/img/profiles/avatar-19.jpg" /></a>
																<a href="client-profile.html">Tressa Wexler <span>Manager</span></a>
															</h2>
														</td>
														<td>tressawexler@example.com</td>
														<td>
															<div className="dropdown action-label">
																<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#ChangeThis" data-toggle="dropdown" aria-expanded="false">
																	<i className="fa fa-dot-circle-o text-danger"></i> Inactive
															</a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
																</div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 className="table-avatar">
																<a href="client-profile.html" className="avatar"><img alt="" src="assets/img/profiles/avatar-07.jpg" /></a>
																<a href="client-profile.html">Ruby Bartlett <span>CEO</span></a>
															</h2>
														</td>
														<td>rubybartlett@example.com</td>
														<td>
															<div className="dropdown action-label">
																<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#ChangeThis" data-toggle="dropdown" aria-expanded="false">
																	<i className="fa fa-dot-circle-o text-danger"></i> Inactive
															</a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
																</div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 className="table-avatar">
																<a href="client-profile.html" className="avatar"><img alt="" src="assets/img/profiles/avatar-06.jpg" /></a>
																<a href="client-profile.html"> Misty Tison <span>CEO</span></a>
															</h2>
														</td>
														<td>mistytison@example.com</td>
														<td>
															<div className="dropdown action-label">
																<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#ChangeThis" data-toggle="dropdown" aria-expanded="false">
																	<i className="fa fa-dot-circle-o text-success"></i> Active
															</a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
																</div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 className="table-avatar">
																<a href="client-profile.html" className="avatar"><img alt="" src="assets/img/profiles/avatar-14.jpg" /></a>
																<a href="client-profile.html"> Daniel Deacon <span>CEO</span></a>
															</h2>
														</td>
														<td>danieldeacon@example.com</td>
														<td>
															<div className="dropdown action-label">
																<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#ChangeThis" data-toggle="dropdown" aria-expanded="false">
																	<i className="fa fa-dot-circle-o text-danger"></i> Inactive
															</a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
																</div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer">
										<a href="clients.html">View all clients</a>
									</div>
								</div>
							</div>
							<div className="col-md-6 d-flex">
								<div className="card card-table flex-fill">
									<div className="card-header">
										<h3 className="card-title mb-0">Recent Projects</h3>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table custom-table mb-0">
												<thead>
													<tr>
														<th>Project Name </th>
														<th>Progress</th>
														<th className="text-right">Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<h2><a href="project-view.html">Office Management</a></h2>
															<small className="block text-ellipsis">
																<span>1</span> <span className="text-muted">open tasks, </span>
																<span>9</span> <span className="text-muted">tasks completed</span>
															</small>
														</td>
														<td>
															<div className="progress progress-xs progress-striped">
																<div className="progress-bar" role="progressbar" data-toggle="tooltip" title="65%" style={{ width: "65%" }}></div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2><a href="project-view.html">Project Management</a></h2>
															<small className="block text-ellipsis">
																<span>2</span> <span className="text-muted">open tasks, </span>
																<span>5</span> <span className="text-muted">tasks completed</span>
															</small>
														</td>
														<td>
															<div className="progress progress-xs progress-striped">
																<div className="progress-bar" role="progressbar" data-toggle="tooltip" title="15%" style={{ width: "15%" }}></div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2><a href="project-view.html">Video Calling App</a></h2>
															<small className="block text-ellipsis">
																<span>3</span> <span className="text-muted">open tasks, </span>
																<span>3</span> <span className="text-muted">tasks completed</span>
															</small>
														</td>
														<td>
															<div className="progress progress-xs progress-striped">
																<div className="progress-bar" role="progressbar" data-toggle="tooltip" title="49%" style={{ width: "49%" }}></div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2><a href="project-view.html">Hospital Administration</a></h2>
															<small className="block text-ellipsis">
																<span>12</span> <span className="text-muted">open tasks, </span>
																<span>4</span> <span className="text-muted">tasks completed</span>
															</small>
														</td>
														<td>
															<div className="progress progress-xs progress-striped">
																<div className="progress-bar" role="progressbar" data-toggle="tooltip" title="88%" style={{ width: "88%" }}></div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2><a href="project-view.html">Digital Marketplace</a></h2>
															<small className="block text-ellipsis">
																<span>7</span> <span className="text-muted">open tasks, </span>
																<span>14</span> <span className="text-muted">tasks completed</span>
															</small>
														</td>
														<td>
															<div className="progress progress-xs progress-striped">
																<div className="progress-bar" role="progressbar" data-toggle="tooltip" title="100%" style={{ width: "100%" }}></div>
															</div>
														</td>
														<td className="text-right">
															<div className="dropdown dropdown-action">
																<a href="#ChangeThis" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-pencil m-r-5"></i> Edit</a>
																	<a className="dropdown-item" href="#ChangeThis"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer">
										<a href="projects.html">View all projects</a>
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


