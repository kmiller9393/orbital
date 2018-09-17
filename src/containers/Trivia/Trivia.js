import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import orbital from '../../images/orbital-header.svg';
import './Trivia.css';

class Trivia extends Component {
  render() {
    return (
      <div className="trivia-container">
        <NavLink to="/">
          <img className="trivia-header-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="trivia-header">Trivia Center</h2>
        <div className="trivia-button-container">
          <button className="trivia-button">
            <NavLink className="trivia-page-link" to="/trivia-one" name="1">
              Week 1
            </NavLink>
          </button>
          <button className="trivia-button" onClick={this.addTriviaTwo}>
            <NavLink className="trivia-page-link" to="/trivia-two" name="2">
              Week 2
            </NavLink>
          </button>
          <button className="trivia-button" onClick={this.addTriviaThree}>
            <NavLink className="trivia-page-link" to="/trivia-three" name="3">
              Week 3
            </NavLink>
          </button>
          <button className="trivia-button" onClick={this.addTriviaFour}>
            <NavLink className="trivia-page-link" to="/trivia-four" name="4">
              Week 4
            </NavLink>
          </button>
          <button className="trivia-button" onClick={this.addTriviaFive}>
            <NavLink className="trivia-page-link" to="/trivia-five" name="5">
              Week 5
            </NavLink>
          </button>
        </div>
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

const { func, object } = PropTypes;
Trivia.propTypes = {
  populateTrivia: func,
  history: object
};
