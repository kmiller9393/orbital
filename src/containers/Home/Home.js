import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateTriviaFacts } from '../../thunks/populateTriviaFacts';
import { populateReview } from '../../thunks/populateReview';
import orbital from '../../images/orbital-header.svg';
import './Home.css';

class Home extends Component {
  setTriviaItems = async () => {
    const { populateTrivia } = this.props;
    await populateTrivia();
  };

  setReviewItems = async () => {
    const { populateReview } = this.props;
    await populateReview();
  };

  render() {
    return (
      <div>
        <header className="main-header-container">
          <img className="main-header-image" src={orbital} alt="Orbital" />
          <h1 className="header-title">Welcome Back</h1>
        </header>
        <div className="homepage-buttons">
          <button className="home-button">
            <NavLink
              className="review-link"
              to="/review"
              onClick={this.setReviewItems}
            >
              Review
            </NavLink>
          </button>
          <button className="home-button">
            <NavLink
              className="review-link"
              to="/trivia-center"
              onClick={this.setTriviaItems}
            >
              Trivia Center
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateTrivia: () => dispatch(populateTriviaFacts()),
  populateReview: () => dispatch(populateReview())
});

export default connect(
  null,
  mapDispatchToProps
)(Home);

const { func } = PropTypes;
Home.propTypes = {
  populateTrivia: func,
  populateReview: func
};
