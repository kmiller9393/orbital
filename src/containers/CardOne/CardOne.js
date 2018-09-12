import React, { Component } from 'react';
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
        <p className={!this.state.toggle ? 'card-title' : 'card-title-toggle'}>
          {this.props.name}
        </p>
        <p className="card-body">
          {this.state.toggle && this.props.definition}
        </p>
      </div>
    );
  }
}

export default CardOne;
