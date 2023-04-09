import React, { Component } from 'react'
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/AccountSetUp.scss';

import logo from '../../assets/Vector-i.svg';
import hero_img from '../../assets/undraw_team_page_re_cffb 1.svg';

class AccountSetUp extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
            <main className='account_set_up'>
                <div className="left_content">
                    <img src={hero_img} alt="hero_illustration" />
                </div>
                <div className="right_content">
                    <h1>Set up your Account</h1>

                    <form action="#">
                        <div className="input_box">
                            <span className='input_label'>Please enter your full name</span>   
                            <input type="text" placeholder='e.g John Kaka' />
                        </div>
                        
                        <div className="input_box">
                            <span className='input_label'>Password</span>
                            <input type="password" placeholder='enter atleast 8 characters' />
                        </div>

                        <div className="input_box">
                            <span className='input_label'>Please enter your organisation’s name</span>
                            <input type="text" placeholder='Organisation Name' />
                        </div>

                        <div className="input_checkbox">
                            <input type="checkbox" name="agree" id="agreeCheckBox" />
                            <span className='input_label'>I agree to <span>Terms of Service</span> and <span>Privacy Policy</span></span>
                            
                        </div>

                        <button>Create Account</button>
                    </form>
                </div>
            </main>
      </React.Fragment>
    )
  }
}

export default AccountSetUp;
