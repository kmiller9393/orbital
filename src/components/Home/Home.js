import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Orbital</h1>
          <h1 className="App-title">Welcome back, Brandon</h1>
        </header>
        <button className="home-button">
          <NavLink className="review-link" to="/review">
            Review
          </NavLink>
        </button>
      </div>
    );
  }
}
