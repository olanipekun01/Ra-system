import React, { Component } from 'react'

import ProfileNavSideBar from '../../components/ProfileNavSideBar';
import ProfileSideDashboard from '../../components/ProfileSideDashboard';

import "../../styles/ProfileAdministrationInviteMembers.scss";

import profileImage from '../../assets/profileImage.svg';
import cameraIcon from '../../assets/Camera.svg';
import ThreeDotIcon from '../../assets/threedots.svg';
import WarningIcon from '../../assets/warningIcon.svg';
import AvatarEclipse1 from '../../assets/image9.png';
import deleteIcon from '../../assets/deleteIcon.svg';


export default class ProfileAdministrationInviteMembers extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='profile_administration_invite_members'>
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
                                <span >Organisation details</span>
                                <span className='active'>Invite Members</span>
                                <span>Export data  account</span>
                            </div>
                            <div className="add_member_button">
                                <button>+ Add Members</button>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Team Members</th>
                                        <th>Team role</th>
                                        <th>Date added</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className='invitee_profile'>
                                            <img src={AvatarEclipse1} alt="image" />
                                            <div className="member_detail">
                                                <p>Jack Micheal</p>
                                                <span>@jack</span>
                                            </div>
                                        </td>

                                        <td>Designer</td>

                                        <td>March 22,2023.</td>

                                        <td className='status_active'>Active</td>

                                        <td><img src={deleteIcon} alt="" /></td>
                                    </tr>

                                    <tr>
                                        <td className='invitee_profile'>
                                            <img src={AvatarEclipse1} alt="image" />
                                            <div className="member_detail">
                                                <p>Cynthia Ayomide</p>
                                                <span>@cynthiaA</span>
                                            </div>
                                        </td>

                                        <td>Developer</td>

                                        <td>March 22,2023.</td>

                                        <td className='status_offline'>Offline</td>

                                        <td><img src={deleteIcon} alt="" /></td>
                                    </tr>

                                    <tr>
                                        <td className='invitee_profile'>
                                            <img src={AvatarEclipse1} alt="image" />
                                            <div className="member_detail">
                                                <p>Gideon Smart</p>
                                                <span>@gISM</span>
                                            </div>
                                        </td>

                                        <td>Admin</td>

                                        <td>March 22,2023.</td>

                                        <td className='status_active'>Active</td>

                                        <td><img src={deleteIcon} alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>

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
