import React, { useState } from 'react';
import AuthHeader from '../layout/AuthHeader';
import '../styles/ResetPassword.scss';

import logo from '../assets/Vector-i.svg';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to send reset password email to the user's email address
  };

  return (
    <React.Fragment>
      <AuthHeader />
      <main className='ResetPassword'>
        <section className='ResetPassword_section'>
          <div className='left_content'>
            <div className='header_wrapper'>
              <img src={logo} className='header_logo' alt='logo' />
              <h1>RA_SYS</h1>
            </div>
            <h4>The paperless organisation</h4>
            <form onSubmit={handleSubmit}>
              <h6>Reset Password</h6>
              <span className='enter_email_text'>Please enter email address</span>
              <div className='input_box'>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <span className='input_label'>Email</span>
              </div>

              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='right_content'></div>
        </section>
      </main>
      <div className='blur_background_wrapper'></div>
    </React.Fragment>
  );
};

export default ResetPassword;
