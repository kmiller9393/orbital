import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { populateFacts } from '../../thunks';
import './Review.css';

class Review extends Component {
  setReviewInfo = async () => {
    const { populateFacts } = this.props;
    await populateFacts();
  };

  render() {
    return (
      <div>
        <h2>Orbital</h2>
        <h2>Review Sections</h2>
        <button className="review-button" onClick={this.setReviewInfo}>
          <NavLink className="review-link" to="/review-one">
            Week 1
          </NavLink>
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateFacts: () => dispatch(populateFacts())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Review)
);
