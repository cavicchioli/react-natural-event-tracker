import React, { Component } from 'react';
import Filter from './components/Filter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <h3>The Earth Observatory Natural Event Tracker (EONET) </h3>
          </div>
        </header>
        <div className="container">
          <Filter />
        </div>
      </div>
    );
  }
}

export default App;
