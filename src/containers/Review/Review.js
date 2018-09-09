import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { populatePage } from '../../actions';
import key from '../../apiKey';
import './Review.css';

class Review extends Component {
  setReviewInfo = async () => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${key}`
    );
    const result = await response.json();
    this.props.getSpaceData(result);
  };

  render() {
    return (
      <div>
        <h2>Orbital</h2>
        <h2>Review Topics</h2>
        <button className="review-button" onClick={this.setReviewInfo}>
          <NavLink className="mars-link" to="/mars-review">
            Mars
          </NavLink>
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getSpaceData: loadingData => dispatch(populatePage(loadingData))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Review)
);
