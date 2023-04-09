import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import RightSideBar from '../../components/RightSideBar.jsx';

import "../../styles/WorkManagementDashboard.scss";

import downArrowIcon from "../../assets/downArrowIcon.svg";
import leftArrowIcon from "../../assets/leftArrowIcon.svg";
import rightArrowIcon from "../../assets/rightArrowIcon.svg";
import filterIcon from "../../assets/filterIcon.svg";
import arrowIcon from '../../assets/arrowIcon.svg';
import removeButton from '../../assets/removeButton.svg';
import redEclipse from '../../assets/redEclipse.svg';
import yellowEclipse from '../../assets/yellowEclipse.svg';
import blackEclipse from '../../assets/blackEclipse.svg';


export default class WorkManagementDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeIsActive: false,
      departmentIsActive: false
    }
  }
  render() {
    return (
      <React.Fragment>
         <main className="work_management_dashboard">
            <ProfileSideDashboard />

            <section className="hero">
                {/* <div className="inner_navbar">
                    <span className="nav_header">Work Management</span>
                    <hr />
                    <span>Rename Work space</span>
                    <span>Change Icon</span>
                    <span>Manage Work space</span>
                    <hr />
                    <span>Add new workplace</span>
                    <span>Browse all workplaces</span>
                    <img src={leftArrowIcon} className="close_navbar_icon" alt="" />
                </div> */}
               <div className="main_content">
                <h1 className="main_content_header">Work Management</h1>
                <hr />
              <div className="filter_section">
                <span>Filter</span>
                <img src={filterIcon} className="filter" alt="" />
                <img src={downArrowIcon} alt="" />
              </div>

              <div className="block">
                <p onClick={() => {
                  this.setState({
                    employeeIsActive: !this.state.employeeIsActive
                  })
                }}>Employees <i className={this.state.employeeIsActive ? "blockUpArrow" : "blockRightArrow"}>{/*<img src={arrowIcon} alt="" />*/}</i></p>
                <div className={this.state.employeeIsActive ? "employee_section dept_section active" : "employee_section dept_section"}>
                    <table>
                      <thead>
                        <tr>
                          <th className="icon"></th>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Last Request</th>
                          <th>Current Approval status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cells">
                          <td className="icon">O</td>
                          <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={redEclipse} alt="" /></i> Pending <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                          <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={redEclipse} alt="" /></i> Pending <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                          <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={redEclipse} alt="" /></i> Pending <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={yellowEclipse} alt="" /></i> Cancelled <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={yellowEclipse} alt="" /></i> Cancelled <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={yellowEclipse} alt="" /></i> Cancelled <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={yellowEclipse} alt="" /></i> Cancelled <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={blackEclipse} alt="" /></i> None <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={blackEclipse} alt="" /></i> None <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={blackEclipse} alt="" /></i> None <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                           <td>Sandra linda</td>
                          <td>Laboratory</td>
                          <td>21/12/2022</td>
                          <td><i className='eclipse'><img src={blackEclipse} alt="" /></i> None <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <button>+ Add Employee</button>
                  </div>
              </div>
              <div className="block">
                <p onClick={() => {
                  this.setState({
                    departmentIsActive: !this.state.departmentIsActive
                  })
                }}>Department <i className={this.state.departmentIsActive ? "blockUpArrow" : "blockRightArrow"}>{/*<img src={arrowIcon} alt="" />*/}</i></p>
                  <div className={this.state.departmentIsActive ? "lab_dept_section dept_section active" : "lab_dept_section dept_section"}>
                    <h3>Laboratory Department <span><i><img src={removeButton} alt="" /></i> Remove department</span></h3>
                    <table>
                      <thead>
                        <tr>
                          <th className="icon">O</th>
                          <th>Name of Employee</th>
                          <th>Work Description</th>
                          <th>Last Approval</th>
                          <th>Current Approval status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cells">
                          <td className="icon">O</td>
                          <td>Moses John</td>
                          <td>Lab Manager</td>
                          <td>Jan 8th, 2022</td>
                          <td><i className='eclipse'><img src={redEclipse} alt="" /></i> Pending <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                          <td>Moses John</td>
                          <td>Lab Manager</td>
                          <td>Jan 8th, 2022</td>
                          <td><i className='eclipse'><img src={yellowEclipse} alt="" /></i> Cancelled <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className="icon">O</td>
                          <td>Moses John</td>
                          <td>Lab Manager</td>
                          <td>None</td>
                          <td><i className='eclipse'><img src={blackEclipse} alt="" /></i> None <i className="remove"><img src={removeButton} alt="" /></i></td>
                        </tr>
                        <tr className="cells">
                          <td className='icon'>O</td>
                          <td>+ Add</td>
                        </tr>
                      </tbody>
                    </table>
                    <button>+ Add Department</button>
                  </div>
              </div>
               
              
                
               </div>
            </section>

            <RightSideBar />
        </main>
      </React.Fragment>
    )
  }
}

