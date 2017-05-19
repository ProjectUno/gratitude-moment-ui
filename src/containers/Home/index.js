import React, { Component } from 'react';
import Header from '../../components/Header'
import JournalEntry from '../../components/JournalEntry'
import helpers from '../../services/moments.js'

import './Home.scss';

class Home extends Component {

  getMoments() {
    let moments = helpers.getMoments()
    console.log(moments)
  }
  render() {
    this.getMoments()
    return (
      <div className="home-container">
        <Header />
        <JournalEntry/>
      </div>
    );
  }
}

export default Home;
