import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { populatePage } from '../../actions';
import './Review.css';

class Review extends Component {
  setReviewInfo = async () => {
    const response = await fetch(
      'http://hubblesite.org/api/v3/glossary?page=all'
    );
    const fetchedFacts = await response.json();
    this.props.getSpaceData(fetchedFacts);
  };

  render() {
    return (
      <div>
        <h2>Orbital</h2>
        <h2>Review Sections</h2>
        <button className="review-button" onClick={this.setReviewInfo}>
          <NavLink className="review-link" to="/one-review">
            Week 1
          </NavLink>
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getSpaceData: glossary => dispatch(populatePage(glossary))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Review)
);
