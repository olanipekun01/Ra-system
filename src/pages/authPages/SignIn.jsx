import React, { Component } from 'react';
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/SignIn.scss';


import logo from '../../assets/Vector-i.svg';
import hero_img from '../../assets/pana.png';
import google from '../../assets/google-svgrepo-com 1.svg';

class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main className='SignIn'>
            <div className="left_content">
                <img src={hero_img} alt="hero_illustration" />
            </div>
            <div className="right_content">
                <div className="header_wrapper">
                    <img src={logo} className="header_logo" alt="logo" />
                    <h1>RA_SYS</h1>
                </div>
                <h4>The paperless organisation</h4>

                <form action="#">
                    <h6>Enter your User Email</h6>
                    <div className="input_box">
                        <input type="email" placeholder='DrennanKaka.Racoonlaboratories@RA_System.com' />
                        <span className='input_label'>Username</span>
                    </div>
                    
                    <div className="input_box">
                        <input type="password" placeholder='Password' />
                        <span className='input_label'>Password</span>
                    </div>
                    <button>Sign In</button>
                    <span className='other_links'>Cant log in? <span>Visit our help center</span></span>
                    <span className='other_links'>Dont have an account? 
                        <span onClick={() => {
                           document.querySelector(".SignUp_section").style.visibility = "visible";
                           document.querySelector(".blur_background_wrapper").style.visibility = "visible";
                        }}>
                          Create one
                        </span>
                    </span>
                </form>
            </div>
        </main>
        <section className='SignUp_section'>
          <div className='SignUp_section_wrapper'>
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
                    <span className='other_links'>Already have an account? 
                      <span onClick={() => {
                          document.querySelector(".SignUp_section").style.visibility = "hidden";
                          document.querySelector(".blur_background_wrapper").style.visibility = "hidden";
                      }}>
                        Log in
                      </span>
                    </span>
                </form>
            </div>
            <div className="right_content"></div>

          </div>
        </section>
        

        <div className="blur_background_wrapper"></div>
      </React.Fragment>
    )
  }
}

export default SignIn;
