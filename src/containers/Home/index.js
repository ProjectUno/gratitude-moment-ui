import React, { Component } from 'react';
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import JournalEntry from '../../components/JournalEntry'
import helpers from '../../services/moments.js'

import './Home.scss';

class Home extends Component {


  componentDidMount() {
    let moments = helpers.getMoments()
    this.setState({
      moments : moments
    })    
  }
  createMoments() {

    let contents = (
      <div>
        <JournalEntry />
        <JournalEntry />
        <JournalEntry />
        <JournalEntry />
      </div>
    )

    return contents
  }
  render() {

    let moments = this.createMoments()
    return (
      <div className="home-container">
        <Header />
        <SubHeader />
        {moments}
      </div>
    );
  }
}

export default Home;
