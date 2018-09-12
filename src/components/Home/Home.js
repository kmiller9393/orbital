import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import orbital from '../../images/orbital-header.svg';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="main-header-container">
          <img className="main-header-image" src={orbital} alt="Orbital" />
          <h1 className="header-title">Welcome Back, Brandon</h1>
        </header>
        <div className="homepage-buttons">
          <button className="home-button">
            <NavLink className="review-link" to="/review">
              Review
            </NavLink>
          </button>
          <button className="home-button">
            <NavLink className="review-link" to="/trivia-center">
              Trivia Center
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}
