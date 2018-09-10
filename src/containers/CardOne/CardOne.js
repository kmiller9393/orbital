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
        <p>{this.props.name}</p>
        <p>{this.state.toggle && this.props.definition}</p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  definitions: state.rovers
});

export default connect(
  mapStateToProps,
  null
)(CardOne);
