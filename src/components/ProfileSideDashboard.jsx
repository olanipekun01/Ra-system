import React, { Component } from 'react';

import '../styles/ProfileSideDashboard.scss';

import logo from '../assets/Vector-i.svg';
import dashboardIcon from '../assets/DashboardIcon.svg';
import workManagementIcon from '../assets/workManagementIcon.svg';
import scheduleIcon from '../assets/Calendar.svg';
import requestIcon from '../assets/requestIcon.svg';
import searchIcon from '../assets/searchIcon.png';
import historyIcon from '../assets/clockIcon.svg';
import humanIcon from '../assets/humanIcon.svg';
import upgradeAccountImage from '../assets/upgradeAccountImageFrame.svg';
import logOutIcon from '../assets/logOutIcon.svg';

export default class ProfileSideDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="left_side_bar">
                <div className="header_wrapper">
                    <img src={logo} className="header_logo" alt="logo" />
                    <h1>RA_SYS</h1>
                </div>

                <div className="nav_bar">
                    <div className="nav_wrapper">
                        <img src={dashboardIcon} className="nav_icon" alt="nav logo" />
                        <span>Dashboard</span>
                    </div>

                    <div className="nav_wrapper">
                        <img src={workManagementIcon} className="nav_icon" alt="nav logo" />
                        <span>Work management</span>
                    </div>

                    <div className="nav_wrapper">
                        <img src={scheduleIcon} className="nav_icon" alt="nav logo" />
                        <span>Schedule</span>
                    </div>

                    <div className="nav_wrapper">
                        <img src={requestIcon} className="nav_icon" alt="nav logo" />
                        <span>Requests</span>
                    </div>

                    <div className="nav_wrapper">
                        <img src={searchIcon} className="nav_icon" alt="nav logo" />
                        <span>Search</span>
                    </div>

                    <div className="nav_wrapper">
                        <img src={historyIcon} className="nav_icon" alt="nav logo" />
                        <span>History</span>
                    </div>

                    <div className="nav_wrapper">
                        <img src={humanIcon} className="nav_icon" alt="nav logo" />
                        <span>Invite Members</span>
                    </div>

                    
                </div>
                <figure>
                 <img src={upgradeAccountImage} alt="" className="upgradeAccountImage" />
                </figure>

                <div className="logout_div">
                    <span>Logout</span>
                    <img src={logOutIcon} alt="" className='logout_icon'/>
                </div>

                <span className="version">Version 1.0</span>
            </section>
      </React.Fragment>
    )
  }
}
