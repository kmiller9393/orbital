import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateTriviaFacts } from '../../thunks';
import PropTypes from 'prop-types';
import orbital from '../../images/orbital-header.svg';
import './Trivia.css';

class Trivia extends Component {
  setTriviaInfo = async () => {
    await this.props.populateTrivia();
  };

  render() {
    return (
      <div className="trivia-container">
        <NavLink to="/">
          <img className="trivia-header-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="trivia-header">Trivia Center</h2>
        <div className="trivia-button-container">
          <button className="trivia-button" onClick={this.setTriviaInfo}>
            <NavLink className="trivia-page-link" to="/trivia-one">
              Week 1
            </NavLink>
          </button>
          <button className="trivia-button">
            <NavLink className="trivia-page-link" to="/trivia-two">
              Week 2
            </NavLink>
          </button>
          <button className="trivia-button">
            <NavLink className="trivia-page-link" to="/trivia-three">
              Week 3
            </NavLink>
          </button>
          <button className="trivia-button">
            <NavLink className="trivia-page-link" to="/trivia-four">
              Week 4
            </NavLink>
          </button>
          <button className="trivia-button">
            <NavLink className="trivia-page-link" to="/trivia-five">
              Week 5
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateTrivia: () => dispatch(populateTriviaFacts())
});

export default connect(
  null,
  mapDispatchToProps
)(Trivia);

const { func } = PropTypes;
Trivia.propTypes = {
  populateTrivia: func
};
