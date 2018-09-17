import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import orbital from '../../images/orbital-header.svg';
import './Review.css';

export default class Review extends Component {
  render() {
    return (
      <div className="review-container">
        <NavLink to="/">
          <img className="review-header-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="review-header">Weekly Reviews</h2>
        <div className="review-button-container">
          <button className="review-button">
            <NavLink className="review-page-link" to="/review-one">
              Week 1
            </NavLink>
          </button>
          <button className="review-button">
            <NavLink className="review-page-link" to="/review-two">
              Week 2
            </NavLink>
          </button>
          <button className="review-button">
            <NavLink className="review-page-link" to="/review-three">
              Week 3
            </NavLink>
          </button>
          <button className="review-button">
            <NavLink className="review-page-link" to="/review-four">
              Week 4
            </NavLink>
          </button>
          <button className="review-button">
            <NavLink className="review-page-link" to="/review-five">
              Week 5
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}
