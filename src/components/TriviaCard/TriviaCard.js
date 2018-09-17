import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TriviaCard.css';

export default class TriviaCard extends Component {
  render() {
    const { answer, name } = this.props;
    return (
      <div className="trivia-choice" name={name}>
        {answer}
      </div>
    );
  }
}

const { string } = PropTypes;
TriviaCard.propTypes = {
  name: string,
  answer: string
};
