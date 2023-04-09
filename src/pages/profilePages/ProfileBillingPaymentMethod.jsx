import React, { Component } from 'react'

import ProfileNavSideBar from '../../components/ProfileNavSideBar';
import ProfileSideDashboard from '../../components/ProfileSideDashboard';

import "../../styles/ProfileBillingPaymentMethod.scss";

import profileImage from '../../assets/profileImage.svg';
import cameraIcon from '../../assets/Camera.svg';
import ThreeDotIcon from '../../assets/threedots.svg';
import WarningIcon from '../../assets/warningIcon.svg';
import AvatarEclipse1 from '../../assets/image9.png';
import deleteIcon from '../../assets/deleteIcon.svg';
import mastercard_logo from '../../assets/mastercard_logo.svg';


export default class ProfileBillingPaymentMethod extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='profile_billing_payment_method'>
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
                                <span className='active'>Payment method</span>
                                <span>Billing plans</span>
                                <span>Billing history</span>
                            </div>

                            <div className="card_detail_header">
                                <p>Card Details</p>
                                <span>remove card</span>
                            </div>

                            <div className="card_detail_wrapper">
                                <div className="card_wrapper">
                                    <img src={mastercard_logo} alt="" />
                                    <span>Mastercard *****4598</span>
                                    <input type="radio" checked="checked" name="" id="" />
                                </div>

                                <div className="add_card_button">
                                    <button>+ Add another payment method</button>
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
