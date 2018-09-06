import React, { Component } from 'react';
import key from './apiKey';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${key}&count=100`
    );
    const spaceData = await response.json();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
