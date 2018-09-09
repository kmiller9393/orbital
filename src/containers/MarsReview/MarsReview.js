import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MarsReview.css';

class MarsReview extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  render() {
    return (
      <div>
        <h2>Orbital</h2>
        <h2>Mars Review</h2>
        <div
          className="flash-card"
          onClick={() => this.setState({ toggle: !this.state.toggle })}
        >
          What was the launch date of the Curiosity rover?
          {this.state.toggle && this.props.questions[0].launch_date}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  questions: state.rovers
});

export default connect(
  mapStateToProps,
  null
)(MarsReview);
