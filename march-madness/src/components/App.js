import React from 'react';
import '../styles/App.css';
import BaseComponent from './BaseComponent';
import DraftBar from './draftBar/DraftBar';
import DraftBoard from './draftBoard/DraftBoard';

class App extends BaseComponent {
  render() {
    return (
      <div className="App">
        <DraftBar />
        <DraftBoard />
      </div>
    );
  }
}

export default App;
