import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import backArrow from '../../images/left-arrow.svg';
import loadingGif from '../../images/loading-globe.gif';
import './Review.css';

class Review extends Component {
  render() {
    const { glossary } = this.props;

    return (
      <div className="review-container">
        {!glossary.length ? (
          <img className="loading-gif" src={loadingGif} alt="loading" />
        ) : (
          ''
        )}
        {glossary.length ? (
          <div className="review-header-container">
            <NavLink to="/">
              <img className="back-arrow" src={backArrow} alt="Navigate Back" />
            </NavLink>
            <NavLink to="/">
              <img
                className="review-header-image"
                src={orbital}
                alt="Orbital"
              />
            </NavLink>
          </div>
        ) : (
          ''
        )}
        {glossary.length ? (
          <h2 className="review-header">Weekly Reviews</h2>
        ) : (
          ''
        )}
        {glossary.length ? (
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
        ) : (
          ''
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  glossary: state.glossary
});

export default connect(
  mapStateToProps,
  null
)(Review);
