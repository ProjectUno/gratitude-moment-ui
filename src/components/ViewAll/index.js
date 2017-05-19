import React, { Component } from 'react';

import './ViewAll.scss';

class ViewAll extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="viewAllFooter">
          <btn className="viewAllButton">VIEW ALL<>
        </div>
    );
  }
}

export default ViewAll;
