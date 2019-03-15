import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import backArrow from '../../images/left-arrow.svg';
import loadingGif from '../../images/loader.gif';
import './Trivia.css';

class Trivia extends Component {
  handleRoute = e => {
    const { name } = e.target;

    const { history } = this.props;

    history.push(name);
  };

  render() {
    const { triviaAnswers } = this.props;

    return (
      <div
        className={
          !triviaAnswers.length ? 'trivia-container center' : 'trivia-container'
        }
      >
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
            <button
              className="trivia-button trivia-page-link"
              name="/trivia-one"
              onClick={this.handleRoute}
            >
              Week 1
            </button>
            <button
              className="trivia-button trivia-page-link"
              name="/trivia-two"
              onClick={this.handleRoute}
            >
              Week 2
            </button>
            <button
              className="trivia-button trivia-page-link"
              name="/trivia-three"
              onClick={this.handleRoute}
            >
              Week 3
            </button>
            <button
              className="trivia-button trivia-page-link"
              name="/trivia-four"
              onClick={this.handleRoute}
            >
              Week 4
            </button>
            <button
              className="trivia-button trivia-page-link"
              name="/trivia-five"
              onClick={this.handleRoute}
            >
              Week 5
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
