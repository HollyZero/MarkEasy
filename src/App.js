import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Navigation from './Navigation.js';
import Edit from './Edit.js';
import Mark from './Mark.js';


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
