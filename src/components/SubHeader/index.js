import React, { Component } from 'react';

import './SubHeader.scss';

class SubHeader extends Component {

  constructor(props) {
    super(props);

  }



  render() {


    return (
        <div className="subheader">
          <div className="subtitle">Last 5 Entries</div>
        </div>
    );
  }
}

export default SubHeader;
