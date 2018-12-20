import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import BaseComponent from './BaseComponent';
import DraftBar from './draftBar/DraftBar';

class App extends BaseComponent {
  render() {
    return (
      <div className="App">
        <DraftBar />
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
    );
  }
}

export default App;
