import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import './TriviaContainer.css';

class TriviaContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
    const answers = this.props.triviaAnswers.map((subject, index) => {
      return (
        <TriviaCard
          answer={subject.answer}
          question={subject.question}
          key={index}
        />
      );
    });

    const triviaQuestions = this.props.triviaAnswers.map(
      subject => subject.question
    );

    return (
      <div>
        <NavLink to="/">
          <img className="trivia-container-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="trivia-title">Week 1 Trivia</h2>
        <div className="answers-container">
          <h3>What is {triviaQuestions[0]}?</h3>
          {answers[0]}
          {answers[1]}
          {answers[2]}
          {answers[3]}
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
)(TriviaContainer);
