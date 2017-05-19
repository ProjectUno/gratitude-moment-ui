import React, { Component } from 'react';
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import JournalEntry from '../../components/JournalEntry'
import ViewAll from '../../components/ViewAll'
import helpers from '../../services/moments.js'

import './Home.scss';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state= {
      moments : []
    }
  }
  componentWillMount() {
    helpers.getMoments().then((moment) => {
      this.setState({
        moments : moment
    })
    })
  }

  createMoments() {
    let moments = this.state.moments

    let momentsList = moments.reverse().map(moment => {
      let id = moment.id
      let date = new Date(moment.created_at)
      let meridiem = 'am'
      let hour = date.getHours()
      let minutes = date.getMinutes()

      if (hour >= 12) {
        meridiem = 'pm'
        if (hour !== 12) {
          hour -= 12
        }
      } else if (hour === 0) {
        hour += 12
      }

      if (minutes < 10) {
        minutes = '0' + minutes
      }

      let dateString = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' - ' + hour + ":" + minutes + meridiem
      return (
        <div key={id} >
          <JournalEntry date={dateString} body={moment.body}/>
        </div>
      )
    })
    return momentsList

  }
  render() {

    let moments = this.createMoments()
    return (
      <div className="home-container">
        <Header />
        <SubHeader />
        {moments}
        <ViewAll />
      </div>
    );
  }
}

export default Home;
