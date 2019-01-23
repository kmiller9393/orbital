import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateTriviaFacts } from '../../thunks/populateTriviaFacts';
import { populateReview } from '../../thunks/populateReview';
import { populateEvents } from '../../thunks/populateEvents';
import orbital from '../../images/orbital-header.svg';
import './Home.css';

export class Home extends Component {
  handleTriviaRoute = async () => {
    const { populateTrivia, history } = this.props;

    history.push('/trivia-center');

    await populateTrivia();
  };

  handleReviewRoute = async () => {
    const { populateReview, history } = this.props;

    history.push('/review');

    await populateReview();
  };

  handleEventsRoute = async () => {
    const { populateEvents, history } = this.props;

    history.push('/current-events');

    await populateEvents();
  };

  render() {
    return (
      <div>
        <header className="main-header-container">
          <img className="main-header-image" src={orbital} alt="Orbital" />
          <h1 className="header-title">Welcome Back</h1>
        </header>
        <div className="homepage-buttons">
          <button
            className="home-button review-link-1"
            onClick={this.handleReviewRoute}
          >
            Review
          </button>
          <button
            className="home-button trivia-link-1"
            onClick={this.handleTriviaRoute}
          >
            Trivia Center
          </button>
          <button
            className="home-button current-link-1"
            onClick={this.handleEventsRoute}
          >
            Current Events
          </button>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateTrivia: () => dispatch(populateTriviaFacts()),
  populateReview: () => dispatch(populateReview()),
  populateEvents: () => dispatch(populateEvents())
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
