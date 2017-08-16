import React, { Component } from 'react';
import './style/App.css';
import Navigation from './Navigation.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
