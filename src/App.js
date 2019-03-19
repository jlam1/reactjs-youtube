import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
>>>>>>> adf4392e598fbf60e3b06cc486a1549862e3bfc9
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> adf4392e598fbf60e3b06cc486a1549862e3bfc9
