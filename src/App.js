import React, { Component } from 'react';
import key from './apiKey';
import { populatePage } from './actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=2018-05-06&end_date=2018-09-06`
    );
    // or fetch all archive?
    const spaceData = await response.json();
    console.log(spaceData);
    this.props.getSpaceData(spaceData);
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

export const mapDispatchToProps = dispatch => ({
  getSpaceData: loadingData => dispatch(populatePage(loadingData))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
