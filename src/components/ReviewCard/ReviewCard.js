import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';

class ReviewCard extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  render() {
    const { toggle } = this.state;
    const { name, definition } = this.props;

    return (
      <div onClick={() => this.setState({ toggle: !toggle })} className="Card">
        <p className={!toggle ? 'card-title' : 'card-title-toggle'}>{name}</p>
        <p className="card-body">{toggle && definition}</p>
      </div>
    );
  }
}

export default ReviewCard;

const { string } = PropTypes;
ReviewCard.propTypes = {
  name: string,
  definition: string
};
