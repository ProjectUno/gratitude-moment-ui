import React, { Component } from 'react';

import './JournalEntry.scss';

class JournalEntry extends Component {


  render() {
    let { date, body } = this.props

    return (
        <div className="entry-container">
          <div className="row-1">
            <span>{date}</span>
          </div>
          <div className="row-2">
            <div>{body}</div>
          </div>
        </div>
    );
  }
}

export default JournalEntry;
