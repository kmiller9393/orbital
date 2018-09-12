import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import './TriviaContainer.css';

class TriviaContainer extends Component {
  render() {
    const answers = this.props.answers.map((answer, index) => {
      return (
        <TriviaCard
          answer={Object.keys(answer)[0]}
          question={Object.values(answer)[0]}
          key={index}
        />
      );
    });

    return (
      <div>
        <NavLink to="/">
          <img className="trivia-container-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="trivia-title">Week 1 Trivia</h2>
        <div className="answers-container">{answers}</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  answers: state.triviaAnswers
});

export default connect(
  mapStateToProps,
  null
)(TriviaContainer);
