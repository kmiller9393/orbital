import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { populateFacts } from '../../thunks';
import PropTypes from 'prop-types';
import orbital from '../../images/orbital-header.svg';
import './Review.css';

class Review extends Component {
  setReviewInfo = async () => {
    await this.props.populateFacts();
  };

  render() {
    return (
      <div className="review-container">
        <NavLink to="/">
          <img className="review-header-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="review-header">Weekly Reviews</h2>
        <div className="review-button-container">
          <button className="review-button" onClick={this.setReviewInfo}>
            <NavLink className="review-page-link" to="/review-one">
              Week 1
            </NavLink>
          </button>
          <button className="review-button" onClick={this.setReviewInfo}>
            <NavLink className="review-page-link" to="/review-two">
              Week 2
            </NavLink>
          </button>
          <button className="review-button" onClick={this.setReviewInfo}>
            <NavLink className="review-page-link" to="/review-three">
              Week 3
            </NavLink>
          </button>
          <button className="review-button" onClick={this.setReviewInfo}>
            <NavLink className="review-page-link" to="/review-four">
              Week 4
            </NavLink>
          </button>
          <button className="review-button" onClick={this.setReviewInfo}>
            <NavLink className="review-page-link" to="/review-five">
              Week 5
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateFacts: () => dispatch(populateFacts())
});

export default connect(
  null,
  mapDispatchToProps
)(Review);

const { func } = PropTypes;
Review.propTypes = {
  populateFacts: func
};
