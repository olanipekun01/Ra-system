import React, { Component } from 'react';
import '../styles/AuthHeader.scss';

import logo from '../assets/Vector-i.svg';

class AuthHeader extends Component {
  render() {
    return (
      <React.Fragment>
         <header>
            <img src={logo} className="header_logo" alt="logo" />
        </header>
      </React.Fragment>
    )
  }
}

export default AuthHeader;
