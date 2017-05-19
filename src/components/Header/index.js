import React, { Component } from 'react';
import g from '../../assets/g.svg'
import settings from '../../assets/Settings.svg'

import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);

  }



  render() {


    return (
        <div className="header">
          <img src={g} alt='Logito' />
          <div className="title">I'm Grateful For</div>
          <img src={settings} alt='Settings' />
        </div>
    );
  }
}

export default Header;
