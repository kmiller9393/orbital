import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import { NavLink, withRouter } from 'react-router-dom';
import {
  addTriviaOne,
  addTriviaTwo,
  addTriviaThree,
  addTriviaFour,
  addTriviaFive
} from '../../utils/helper';
import { connect } from 'react-redux';
import { addScore } from '../../actions';
import PropTypes from 'prop-types';
import orbital from '../../images/orbital-header.svg';
import './TriviaContainer.css';

class TriviaContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      triviaItems: [],
      ready: false
    };
  }

  componentDidMount() {
    const { triviaAnswers, history } = this.props;
    const { ready } = this.state;
    let triviaItems;

    if (history.location.pathname.includes('/trivia-one')) {
      triviaItems = addTriviaOne(triviaAnswers);
      this.setState({ triviaItems, ready: !ready });
    }

    if (history.location.pathname.includes('/trivia-two')) {
      triviaItems = addTriviaTwo(triviaAnswers);
      this.setState({ triviaItems, ready: !ready });
    }

    if (history.location.pathname.includes('/trivia-three')) {
      triviaItems = addTriviaThree(triviaAnswers);
      this.setState({ triviaItems, ready: !ready });
    }

    if (history.location.pathname.includes('/trivia-four')) {
      triviaItems = addTriviaFour(triviaAnswers);
      this.setState({ triviaItems, ready: !ready });
    }

    if (history.location.pathname.includes('/trivia-five')) {
      triviaItems = addTriviaFive(triviaAnswers);
      this.setState({ triviaItems, ready: !ready });
    }
  }

  checkAnswer = e => {
    const { history, addScore, score } = this.props;
    const { page, triviaItems } = this.state;

    const answers = triviaItems.map(subject => subject.answer);
    let newPage = page;

    if (e.target.innerText === answers[newPage]) {
      addScore(score);
    }

    this.setState({ page: newPage + 1 });

    if (history.location.pathname.includes('/trivia-one')) {
      history.replace(`/trivia-one/${[newPage]}`);
    }

    if (history.location.pathname.includes('/trivia-two')) {
      history.replace(`/trivia-two/${[newPage]}`);
    }
    if (history.location.pathname.includes('/trivia-three')) {
      history.replace(`/trivia-three/${[newPage]}`);
    }

    if (history.location.pathname.includes('/trivia-four')) {
      history.replace(`/trivia-four/${[newPage]}`);
    }

    if (history.location.pathname.includes('/trivia-five')) {
      history.replace(`/trivia-five/${[newPage]}`);
    }
  };

  render() {
    const { page, triviaItems, ready } = this.state;
    const { triviaAnswers } = this.props;
    const answers = triviaAnswers.map(subject => {
      return <TriviaCard {...subject} key={subject.id} />;
    });

    return (
      <div>
        <NavLink to="/">
          <img className="trivia-container-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="trivia-title">Weekly Trivia</h2>

        <div className="answers-container">
          {ready && <h3>What is {triviaItems[page].question}?</h3>}
          <div onClick={e => this.checkAnswer(e)}>
            {answers[Math.floor(Math.random() * 46)]}
          </div>
          {ready && (
            <div onClick={e => this.checkAnswer(e)} className="trivia-card">
              {triviaItems[page].answer}
            </div>
          )}
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

const { array, object, func, number } = PropTypes;
TriviaContainer.propTypes = {
  triviaAnswers: array,
  history: object,
  addScore: func,
  score: number
};
