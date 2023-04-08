import React, { Component } from 'react';
import ProfileSideDashboard from '../components/ProfileSideDashboard';
import ProfileNavSideBar from '../components/ProfileNavSideBar';

import "../styles/Profile.scss";


import profileImage from '../assets/profileImage.svg';
import cameraIcon from '../assets/Camera.svg';
import ThreeDotIcon from '../assets/threedots.svg';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='profile-account'>
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
                            <div className="input_div_wrapper">
                                <div className="input_div">
                                    <span>First Name<i>*</i></span>
                                    <input type="text" placeholder='Drennan' />
                                </div>

                                <div className="input_div">
                                    <span>Last Name<i>*</i></span>
                                    <input type="text" placeholder='Last name' />
                                </div>
                            </div>

                            <div className="input_div_wrapper">
                                <div className="input_div">
                                    <span>Username<i>*</i></span>
                                    <input className='username_input' type="text" placeholder='Drennan' />
                                </div>

                                <span className='example'>.Racoonlaboratories@RA_System.com</span>
                            </div>

                            

                            <div className="input_div_wrapper">
                                <div className="input_div">
                                    <span>Email<i>*</i></span>
                                    <input type="email" placeholder='Email' />
                                </div>


                                <div className="input_div">
                                    <span>Phone No.<i>*</i></span>
                                    <input type="text" placeholder='83 563 888 320' />
                                </div>
                            </div>

                            <div className="input_div_wrapper">
                                <div className="input_div">
                                    <span>Bio<i>*</i><span>(Write a short introduction about yourself)</span></span>
                                    <textarea name="" id="" cols="30" rows="4"></textarea>
                                </div>
                            </div>

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

export default Profile;
