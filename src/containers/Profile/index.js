import React, { Component } from 'react';
import Header from '../../components/Header'

import './Profile.scss';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Header />
        <p>This is a test</p>
      </div>
    );
  }
}

export default Profile;
