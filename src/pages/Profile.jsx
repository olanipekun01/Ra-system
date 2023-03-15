import React, { Component } from 'react';
import ProfileSideDashboard from '../components/ProfileSideDashboard';
import ProfileNavSideBar from '../components/ProfileNavSideBar';

import "../styles/Profile.scss";


import profileImage from '../assets/profileImage.svg';
import cameraIcon from '../assets/Camera.svg';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='profile'>
            <ProfileSideDashboard />
            <section className="hero">
                    <div className="profile_detail">
                        <figure>
                            <img src={profileImage} alt="" className="profile_image" />
                            <img src={cameraIcon} className='profileImageCameraIcon' alt="" />
                        </figure>

                        <div className="hero_name_detail">
                            <h2>Drennan Kaka</h2>
                            <span>Admin</span>
                        </div>

                        <img src={cameraIcon} className="backgroundCameraIcon" alt="" />
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
                                    <input type="text" placeholder='Last name' />
                                </div>
                            </div>

                            <button>Save Changes</button>
                        </div>
                    </div>
            </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Profile;
