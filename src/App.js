import React, { Component } from 'react';
import HeaderNav from 'containers/HeaderNav/HeaderNav';
import Home from 'containers/Home/Home';
import API_KEY from 'config/keys';

class App extends Component {

  componentDidMount() {
    console.log('API_KEY = ' + API_KEY.YOUTUBE_API_KEY);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;