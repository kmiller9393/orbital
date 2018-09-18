import React, { Component } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addReviewOne,
  addReviewTwo,
  addReviewThree,
  addReviewFour,
  addReviewFive
} from '../../utils/helper';
import PropTypes from 'prop-types';
import orbital from '../../images/orbital-header.svg';
import backArrow from '../../images/left-arrow.svg';
import './ReviewContainer.css';

export class ReviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      reviewItems: [],
      ready: false
    };
  }

  componentDidMount() {
    const { glossary } = this.props;
    const { pathname } = this.props.history.location;
    const { ready } = this.state;
    let reviewItems;

    if (pathname.includes('/review-one')) {
      reviewItems = addReviewOne(glossary);
      this.setState({ reviewItems, ready: !ready });
    }

    if (pathname.includes('/review-two')) {
      reviewItems = addReviewTwo(glossary);
      this.setState({ reviewItems, ready: !ready });
    }

    if (pathname.includes('/review-three')) {
      reviewItems = addReviewThree(glossary);
      this.setState({ reviewItems, ready: !ready });
    }

    if (pathname.includes('/review-four')) {
      reviewItems = addReviewFour(glossary);
      this.setState({ reviewItems, ready: !ready });
    }

    if (pathname.includes('/review-five')) {
      reviewItems = addReviewFive(glossary);
      this.setState({ reviewItems, ready: !ready });
    }
  }

  navigateCard = event => {
    const { page, reviewItems } = this.state;
    const { history } = this.props;
    const { pathname } = this.props.history.location;
    let newPage = page;

    event.target.name === 'next' ? newPage++ : newPage--;

    if (newPage < 0 || newPage > reviewItems.length - 1) {
      return;
    }

    this.setState({ page: newPage });

    if (pathname.includes('/review-one')) {
      history.replace(`/review-one/${reviewItems[newPage].name}`);
    }

    if (pathname.includes('/review-two')) {
      history.replace(`/review-two/${reviewItems[newPage].name}`);
    }

    if (pathname.includes('/review-three')) {
      history.replace(`/review-three/${reviewItems[newPage].name}`);
    }

    if (pathname.includes('/review-four')) {
      history.replace(`/review-four/${reviewItems[newPage].name}`);
    }

    if (pathname.includes('/review-five')) {
      history.replace(`/review-five/${reviewItems[newPage].name}`);
    }
  };

  render() {
    const { page, reviewItems, ready } = this.state;

    return (
      <div>
        <div>
          <div className="review-header-container">
            <NavLink to="/review">
              <img className="back-arrow" src={backArrow} alt="Navigate Back" />
            </NavLink>
            <NavLink to="/">
              <img
                className="review-container-image"
                src={orbital}
                alt="Orbital"
              />
            </NavLink>
          </div>
        </div>
        <h2 className="week-title">Weekly Review</h2>
        {ready && <ReviewCard {...reviewItems[page]} key={page} />}
        <div className="button-container">
          <button
            className="review-container-button"
            onClick={this.navigateCard}
            name="previous"
          >
            Previous
          </button>
          <button
            className="review-container-button"
            onClick={this.navigateCard}
            name="next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  glossary: state.glossary
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ReviewContainer)
);

const { array, object } = PropTypes;
ReviewContainer.propTypes = {
  glossary: array,
  history: object
};
