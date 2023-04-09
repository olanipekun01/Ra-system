import React, { Component } from 'react'

import ProfileNavSideBar from '../../components/ProfileNavSideBar';
import ProfileSideDashboard from '../../components/ProfileSideDashboard';

import "../../styles/ProfileBillingPlans.scss";

import profileImage from '../../assets/profileImage.svg';
import cameraIcon from '../../assets/Camera.svg';
import ThreeDotIcon from '../../assets/threedots.svg';
import WarningIcon from '../../assets/warningIcon.svg';
import AvatarEclipse1 from '../../assets/image9.png';
import deleteIcon from '../../assets/deleteIcon.svg';
import mastercard_logo from '../../assets/mastercard_logo.svg';

export default class ProfileBillingPlans extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='profile_billing_plans'>
            <ProfileSideDashboard />
            <section className="hero">
                    <div className="profile_detail">

                        <div className="profile_detail_wrapper">
                            <figure>
                                <img src={profileImage} alt="" className="profile_image" />
                                <img src={cameraIcon} className='profileImageCameraIcon' alt="" />
                            </figure>

                            <div className="hero_name_detail">
                                <span>Admin</span>
                                <h2>Drennan Kaka</h2>
                                
                            </div>
                        </div>
                        

                        <img src={ThreeDotIcon} className="backgroundThreeDotIcon" alt="" />
                    </div>

                    <div className="profile_wrapper">
                        <ProfileNavSideBar />

                        <div className="profile_edit_field">
                            <div className="header_links">
                                <span>Payment method</span>
                                <span className='active'>Billing plans</span>
                                <span>Billing history</span>
                            </div>

                          

                            <div className="plan_wrapper">
                                <div className="plan_card">
                                    <div>
                                        <span className="plan_type">Free Plan</span>
                                        <span className="offer">Limited Offer</span>
                                        <span className="amount">$0/month</span>
                                    </div>

                                    <button>Current Plan</button>
                                </div>

                                <div className="plan_card">
                                    <div>
                                        <span className="plan_type">Professional Plan</span>
                                        <span className="offer">Unlimited Offer</span>
                                        <span className="amount">$20/month</span>
                                    </div>

                                    <button className='choose_plan'>Choose Plan</button>
                                </div>
                            </div>

                    
                        </div>
                    </div>
            </section>
        </main>
      </React.Fragment>
    )
  }
}
