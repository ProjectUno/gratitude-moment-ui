import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import Home from './containers/Home'
import Profile from './containers/Profile'

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  handleRouteChange() {
    this.scrollToTop()
  }

  render() {

    return (
      <HttpsRedirect>
        <Router onUpdate={this.handleRouteChange}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      </HttpsRedirect>
    );
  }
}

export default App;
