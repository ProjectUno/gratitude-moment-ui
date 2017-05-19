import React, { Component } from 'react';

import './JournalEntry.scss';

class JournalEntry extends Component {


  render() {
    let body = "I am grateful for my family and having graduated school so I don't ever have to go back."
    return (
        <div className="entry-container">
          <div className="row-1">
            <p>Date: <span>May 12, 2017</span></p>
          </div>
          <div className="row-2">
            <p>{body}</p>
          </div>
          <hr/>
        </div>
    );
  }
}

export default JournalEntry;
