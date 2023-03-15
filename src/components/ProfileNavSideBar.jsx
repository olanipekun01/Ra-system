import React, { Component } from 'react';

import '../styles/ProfileNavSideBar.scss';

export default class ProfileNavSideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav_sidebar">
                            <ul>
                                <li className='active'>Account</li>
                                <li>Administration</li>
                                <li>Security</li>
                                <li>Notification</li>
                                <li>Billing</li>
                            </ul>
                        </div>
      </React.Fragment>
    )
  }
}
