import React, { Component } from 'react'
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/SignUp.scss';

import logo from '../../assets/Vector-i.svg';
import google from '../../assets/google-svgrepo-com 1.svg';

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
       <AuthHeader />
        <main className='SignUp'>
            <section className='SignUp_section'>
                <div className="left_content">
                    <div className="header_wrapper">
                        <img src={logo} className="header_logo" alt="logo" />
                        <h1>RA_SYS</h1>
                    </div>
                    <h4>The paperless organisation</h4>
                    <form action="#">
                        <h6>Create Account by Email</h6>
                        <span className='enter_email_text'>Please enter email address</span>
                        <div className="input_box">
                            <input type="email" placeholder='Email' />
                            <span className='input_label'>Email</span>
                        </div>
                        
                        <button>Next</button>
                        <div className='or_text'>or</div>

                        <button className='google_auth_button'>
                            <img src={google} alt="google icon" />
                            <span>Create Account with Google</span>
                        </button>
                        <span className='other_links'>Already have an account? <span>Log in</span></span>
                    </form>
                </div>
                <div className="right_content"></div>

            </section>
        </main>
        <div className="blur_background_wrapper"></div>
      </React.Fragment>
    )
  }
}

export default SignUp;
