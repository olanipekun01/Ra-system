import React, { Component } from 'react'

import '../styles/RightSideBar.scss';


import lightIcon from '../assets/lightIcon.svg';
import bellIcon from '../assets/bell_icon.svg';
import bottomArrowIcon from '../assets/bottomArrowIcon.svg';
import profileImage from '../assets/profileImage.svg';
import undrawQuestion from '../assets/undraw_questions_re_1fy71.svg';
import undrawOuterSpace from '../assets/undraw_outer_space_re_u9vd1.svg';

import firstFeedImage from '../assets/image8.png';
import secondFeedImage from '../assets/image9.png';
import thirdFeedImage from '../assets/image12.png';
import fourthFeedImage from '../assets/Mouth.png';

export default class RightSideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="right_sidebar">
                <div className="profile_header">
                  <img src={lightIcon} alt="" />
                  <img src={bellIcon} alt="" />
                  <div className="profile_detail_wrapper">
                    <img src={profileImage} className="profileImage" alt="" />
                    <p>Welcome back, <span>Drennan</span></p>
                    <img src={bottomArrowIcon} alt="" />
                  </div>
                </div>

                <div className="complete_profile_section">
                  <div className="complete_profile">
                    <h4>Complete Your profile</h4>
                    <div className="progress_bar_wrapper">
                      <div className="bar_div">
                        <p>Update your company bio</p>
                        <hr className="bar" />
                      </div>
                      <div className="bar_div">
                        <p>Add admin</p>
                        <hr className="bar" />
                      </div>
                      <div className="bar_div">
                        <p>Add employees and tasks</p>
                        <hr className="bar" />
                      </div>
                    </div>
                  </div>

                  <div className="get_inspired_wrapper">
                    <h3>Get inspired</h3>
                    <div className="inspired_card_warpper">
                      <img src={undrawOuterSpace} alt="" />
                      <div className="inner_div">
                        <h6>Getting started</h6>
                        <span>Learn how RA_System works</span>
                      </div>
                    </div>

                    <div className="inspired_card_warpper">
                      <img src={undrawQuestion} alt="" />
                      <div className="inner_div">
                        <h6>Help Center</h6>
                        <span>Get 24 hours support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="feed_section">
                  <div className="header_wrapper">
                    <span className='active'>Activity feed</span>
                    <span>Mentions</span>
                  </div>

                  <div className="feed_wrapper">
                      <div className="feed_card">
                        <figure>
                          <img src={firstFeedImage} alt="" />
                        </figure>
                        <div className="detail">
                            <div className="detail_header">
                              <span className="username">@DercoMani</span>
                              <span className="time">2 mins ago</span>
                            </div>

                            <p className="detail_body">
                            Commented “Yes, I have been there and I would love to go there again! Do you ...”
                            </p>
                      </div>

                      
                      </div>

                      <div className="feed_card">
                        <figure>
                          <img src={secondFeedImage} alt="" />
                        </figure>
                        <div className="detail">
                            <div className="detail_header">
                              <span className="username">@MiaMore</span>
                              <span className="time">9 mins ago</span>
                            </div>

                            <p className="detail_body">
                              Started following you
                            </p>
                      </div>

                      
                      </div>

                      <div className="feed_card">
                          <figure>
                            <img src={thirdFeedImage} alt="" />
                          </figure>
                          <div className="detail">
                              <div className="detail_header">
                                <span className="username">@RinaMenol</span>
                                <span className="time">11 mins ago</span>
                              </div>

                              <p className="detail_body">
                                Started following you
                              </p>
                          </div>
                      </div>

                      <div className="feed_card">
                          <figure>
                            <img src={fourthFeedImage} alt="" />
                          </figure>
                          <div className="detail">
                              <div className="detail_header">
                                <span className="username">@CoryToms</span>
                                <span className="time">23 mins ago</span>
                              </div>

                              <p className="detail_body">
                                Commented “Where did you find this location?”
                              </p>
                          </div>
                      </div>
                    </div>
                </div>
            </section>
      </React.Fragment>
    )
  }
}
