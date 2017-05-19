import React, { Component } from 'react';
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import JournalEntry from '../../components/JournalEntry'
import helpers from '../../services/moments.js'

import './Home.scss';

class Home extends Component {

constructor(props) {
  super(props)

  this.state= {
    moments : []
  }
}
  componentDidMount() {
    let moments = helpers.getMoments().then(() => {
      this.setState({
        moments : moments
      })    
    })
  }
  createMoments() {
    let moments = this.state.moments
    console.log(moments)
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
