import React, { Component } from 'react'

import ProfileNavSideBar from '../../components/ProfileNavSideBar';
import ProfileSideDashboard from '../../components/ProfileSideDashboard';

import "../../styles/ProfileAdministration.scss";

import profileImage from '../../assets/profileImage.svg';
import cameraIcon from '../../assets/Camera.svg';
import ThreeDotIcon from '../../assets/threedots.svg';
import WarningIcon from '../../assets/warningIcon.svg';

export default class ProfileAdministration extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='profile_administration_organization_detail'>
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
                                <span className='active'>Organisation details</span>
                                <span>Invite Members</span>
                                <span>Export data  account</span>
                            </div>
                            <div className="input_div_wrapper">
                                <div className="input_div">
                                    <span>Organisation Name</span>
                                    <input type="text" placeholder='Racoon Laboratories' />
                                </div>
                            </div>

                            <div className="input_div_wrapper">
                                <div className="input_div">
                                    <span>Organisation URL</span>
                                    <input  type="text" placeholder='RacoonLaboratories' />
                                </div>

                                <span className='example'>@RA_System.com</span>
                            </div>

                            <span className='warning'>
                                <img src={WarningIcon} alt="Icon" />
                                You can only change the url once in 60 days
                            </span>

                            <div className="button_container">
                                <button className='save'>Save Changes</button>
                                <button className='cancel'>Cancel</button>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
      </React.Fragment>
    )
  }
}
