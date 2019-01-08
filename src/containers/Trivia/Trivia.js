import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import backArrow from '../../images/left-arrow.svg';
import loadingGif from '../../images/loading-globe.gif';
import './Trivia.css';

class Trivia extends Component {
  render() {
    const { triviaAnswers } = this.props;

    return (
      <div className="trivia-container">
        {!triviaAnswers.length ? (
          <img className="loading-gif" src={loadingGif} alt="loading" />
        ) : (
          ''
        )}
        {triviaAnswers.length ? (
          <div className="trivia-header-container">
            <NavLink to="/">
              <img className="back-arrow" src={backArrow} alt="Navigate Back" />
            </NavLink>
            <NavLink to="/">
              <img
                className="trivia-header-image"
                src={orbital}
                alt="Orbital"
              />
            </NavLink>
          </div>
        ) : (
          ''
        )}
        {triviaAnswers.length ? (
          <h2 className="trivia-header">Trivia Center</h2>
        ) : (
          ''
        )}
        {triviaAnswers.length ? (
          <div className="trivia-button-container">
            <button className="trivia-button">
              <NavLink className="trivia-page-link" to="/trivia-one" name="1">
                Week 1
              </NavLink>
            </button>
            <button className="trivia-button">
              <NavLink className="trivia-page-link" to="/trivia-two" name="2">
                Week 2
              </NavLink>
            </button>
            <button className="trivia-button">
              <NavLink className="trivia-page-link" to="/trivia-three" name="3">
                Week 3
              </NavLink>
            </button>
            <button className="trivia-button">
              <NavLink className="trivia-page-link" to="/trivia-four" name="4">
                Week 4
              </NavLink>
            </button>
            <button className="trivia-button">
              <NavLink className="trivia-page-link" to="/trivia-five" name="5">
                Week 5
              </NavLink>
            </button>
          </div>
        ) : (
          ' '
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  triviaAnswers: state.triviaAnswers
});

export default connect(
  mapStateToProps,
  null
)(Trivia);
