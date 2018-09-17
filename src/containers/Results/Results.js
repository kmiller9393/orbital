import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resetScore } from '../../actions';
import PropTypes from 'prop-types';
import orbital from '../../images/orbital-header.svg';
import './Results.css';

export class Results extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { score, resetScore } = this.props;

    return (
      <div>
        <NavLink to="/" onClick={() => resetScore()}>
          <img className="results-image" src={orbital} alt="Orbital" />
        </NavLink>
        <div className="score-container">
          <h1 className="results-header">Your Results</h1>
          <p className="score">
            Score:{' '}
            <span className={score > 6 ? 'high-score' : 'low-score'}>
              {((score / 9) * 100).toFixed(2)}%
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  triviaAnswers: state.triviaAnswers,
  score: state.score
});

export const mapDispatchToProps = dispatch => ({
  resetScore: () => dispatch(resetScore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

const { array, number, func } = PropTypes;
Results.propTypes = {
  triviaAnswers: array,
  score: number,
  resetScore: func
};
