import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TriviaCard.css';

export default class TriviaCard extends Component {
  render() {
    return (
      <div className="trivia-choice" name={this.props.name}>
        {this.props.answer}
      </div>
    );
  }
}

const { string } = PropTypes;
TriviaCard.propTypes = {
  name: string,
  answer: string
};
