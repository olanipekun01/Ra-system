import React, { Component } from 'react';
import AuthHeader from '../layout/AuthHeader';
import '../styles/SignIn.scss';


import logo from '../assets/Vector.svg';
import hero_img from '../assets/pana.png';

class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main>
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
                    <span className='other_links'>Dont have an account? <span>Create one</span></span>
                </form>
            </div>
        </main>
      </React.Fragment>
    )
  }
}

export default SignIn;
