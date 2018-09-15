import React, { Component } from 'react';
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
