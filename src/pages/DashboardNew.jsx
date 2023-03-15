import React, { Component } from 'react';

import ProfileSideDashboard from '../components/ProfileSideDashboard.jsx';

import "../styles/DashboardNew.scss";


import historyIcon from '../assets/clockIcon.svg';
import requestIcon from '../assets/requestIcon.svg';
import friendsIcon from '../assets/3-Friends.svg';
import arrowIcon from '../assets/arrowIcon.svg';

import RightSideBar from '../components/RightSideBar.jsx';

export default class DashboardNew extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="dashboard">
            <ProfileSideDashboard />

            <section className="hero">
                  <p className="banner">Hi Drennan! <span>Quickly explore your Recent Boards, Requests and Workplace</span></p>
                  <div className="first_section card_warpper">
                    <div className="card">
                      <p>Total employees <span><img src={friendsIcon} alt="" /></span></p>
                      <span className='amnt'>0 k</span>
                    </div>

                    <div className="card">
                      <p>Total working time <span><img src={historyIcon} alt="" /></span></p>
                      <span  className='amnt'>0Hrs</span>
                    </div>

                    <div className="card">
                      <p>Total Requests <span><img src={requestIcon} alt="" /></span></p>
                      <span className='amnt'>0 k</span>
                    </div>
                  </div>

                  <div className="second_section">
                      <div className="block">
                         <p>Recently Visited <span><img src={arrowIcon} alt="" /></span></p>
                      </div>

                      <div className="block">
                         <p>Requests <i>0</i> <span><img src={arrowIcon} alt="" /></span></p>
                      </div>

                      <div className="block">
                         <p>Workplaces <span><img src={arrowIcon} alt="" /></span></p>
                      </div>
                  </div>
            </section>

            <RightSideBar />
        </main>
      </React.Fragment>
    )
  }
}
