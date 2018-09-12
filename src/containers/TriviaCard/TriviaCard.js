import React, { Component } from 'react';
import { connect } from 'react-redux';

class TriviaCard extends Component {
  render() {
    return <div />;
  }
}

export const mapStateToProps = state => ({
  answers: state.triviaAnswers
});

export default connect(
  mapStateToProps,
  null
)(TriviaCard);
