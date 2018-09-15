import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addScore } from '../../actions';
import orbital from '../../images/orbital-header.svg';
import './TriviaContainer.css';

class TriviaContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  checkAnswer = e => {
    const answers = this.props.triviaAnswers.map(subject => subject.answer);
    const { page } = this.state;
    const { history } = this.props;
    let newPage = page;

    if (e.target.innerText === answers[newPage]) {
      this.props.addScore(this.props.score);
    }

    this.setState(
      { page: newPage + 1 },
      history.replace(`/trivia-one/${[newPage]}`)
    );
  };

  render() {
    const { page } = this.state;

    const answers = this.props.triviaAnswers.map(subject => {
      return <TriviaCard {...subject} key={subject.id} name={subject.answer} />;
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
          <h3>What is {triviaQuestions[page]}?</h3>
          <div onClick={e => this.checkAnswer(e)}>
            {answers[Math.floor(Math.random() * 46)]}
          </div>
          <div onClick={e => this.checkAnswer(e)}>{answers[page]}</div>
          <div onClick={e => this.checkAnswer(e)}>
            {answers[Math.floor(Math.random() * 46)]}
          </div>
          <div onClick={e => this.checkAnswer(e)}>
            {answers[Math.floor(Math.random() * 46)]}
          </div>
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
  addScore: score => dispatch(addScore(score))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TriviaContainer)
);
