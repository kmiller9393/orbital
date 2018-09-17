import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div />;
  }
}

export const mapStateToProps = state => ({
  score: state.score
});

export default connect(
  mapStateToProps,
  null
)(Review);
