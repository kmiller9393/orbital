import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardOne.css';

class CardOne extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  render() {
    return (
      <div
        onClick={() => this.setState({ toggle: !this.state.toggle })}
        className="Card"
      >
        {this.props.question}
        <p>{this.state.toggle && 'ANSWER'}</p>
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
)(CardOne);
