import React, { Component } from 'react'

import ProfileSideDashboard from '../components/ProfileSideDashboard.jsx';
import RightSideBar from '../components/RightSideBar.jsx';

import "../styles/WorkManagementDashboard.scss";

export default class WorkManagementDashboard extends Component {
  render() {
    return (
      <React.Fragment>
         <main className="work_management_dashboard">
            <ProfileSideDashboard />

            <section className="hero">
                <div className="inner_navbar">
                    <span className="nav_header">Work Management</span>
                    <hr />
                    <span>Rename Work space</span>
                    <span>Change Icon</span>
                    <span>Manage Work space</span>
                    <hr />
                    <span>Add new workplace</span>
                    <span>Browse all workplaces</span>
                </div>
               <div className="main_content">
                hello
               </div>
            </section>

            <RightSideBar />
        </main>
      </React.Fragment>
    )
  }
}

