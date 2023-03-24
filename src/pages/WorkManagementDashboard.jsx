import React, { Component } from 'react'

import ProfileSideDashboard from '../components/ProfileSideDashboard.jsx';
import RightSideBar from '../components/RightSideBar.jsx';

import "../styles/WorkManagementDashboard.scss";

import downArrowIcon from "../assets/downArrowIcon.svg";
import leftArrowIcon from "../assets/leftArrowIcon.svg";
import filterIcon from "../assets/filterIcon.svg";

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
                    <img src={leftArrowIcon} className="close_navbar_icon" alt="" />
                </div>
               <div className="main_content">
                <h1 className="main_content_header">Work Management</h1>
                <hr />
              <div className="filter_section">
                <span>Filter</span>
                <img src={filterIcon} className="filter" alt="" />
                <img src={downArrowIcon} alt="" />
              </div>
                <div className="lab_dept_section dept_section">
                  <h3>Laboratory Department</h3>
                  <table>
                    <tr>
                      <th className="icon">O</th>
                      <th>Name of Employee</th>
                      <th>Work Description</th>
                      <th>Last Approval</th>
                      <th>Current Approval status</th>
                    </tr>
                    <tr className="cells">
                      <td className="icon">O</td>
                      <td>Moses John</td>
                      <td>Lab Manager</td>
                      <td>Jan 8th, 2022</td>
                      <td>Pending request</td>
                    </tr>
                    <tr className="cells">
                      <td className="icon">O</td>
                      <td>Moses John</td>
                      <td>Lab Manager</td>
                      <td>Jan 8th, 2022</td>
                      <td>Cancelled request</td>
                    </tr>
                    <tr className="cells">
                      <td className="icon">O</td>
                      <td>Moses John</td>
                      <td>Lab Manager</td>
                      <td>None</td>
                      <td>None</td>
                    </tr>
                    <tr className="cells">
                      <td className='icon'>O</td>
                      <td>+ Add</td>
                    </tr>
                  </table>
                </div>
              
                <div className="name_of_dept_section dept_section">
                  <h3>Name of Department</h3>
                  <table>
                    <tr>
                      <th className="icon">O</th>
                      <th>Name of Employee</th>
                      <th>Work Description</th>
                      <th>Last Approval</th>
                      <th>Current Approval status</th>
                    </tr>
                    <tr className="cells">
                      <td className="icon">O</td>
                      <td>Name of Employee</td>
                      <td>Work Description</td>
                      <td>Last Approval</td>
                      <td>Current Approval Status</td>
                    </tr>
                    <tr className="cells">
                      <td className="icon">O</td>
                      <td>Name of Employee</td>
                      <td>Work Description</td>
                      <td>Last Approval</td>
                      <td>Current Approval Status</td>
                    </tr>
                    <tr className="cells">
                      <td className="icon">O</td>
                      <td>Name of Employee</td>
                      <td>Work Description</td>
                      <td>Last Approval</td>
                      <td>Current Approval Status</td>
                    </tr>
                    <tr className="cells">
                      <td className='icon'>O</td>
                      <td className='add'>+ Add</td>
                    </tr>
                  </table>
                </div>
               </div>
            </section>

            <RightSideBar />
        </main>
      </React.Fragment>
    )
  }
}

