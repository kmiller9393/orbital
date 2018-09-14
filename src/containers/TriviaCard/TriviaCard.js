import React, { Component } from 'react';

export default class TriviaCard extends Component {
  render() {
    return (
      <div>
        <p>{this.props.answer}</p>
      </div>
    );
  }
}
