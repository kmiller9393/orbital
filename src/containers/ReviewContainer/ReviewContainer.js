import React, { Component } from 'react';
import CardOne from '../CardOne/CardOne';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import './ReviewContainer.css';

class ReviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  navigateCard = e => {
    const { page } = this.state;
    const { history, facts } = this.props;
    let newPage = page;

    e.target.name === 'next' ? newPage++ : newPage--;

    if (newPage < 0 || newPage > 8) return;
    this.setState({ page: newPage });
    history.replace(`/review-one/${facts[newPage].name}`);
  };

  render() {
    const { page } = this.state;
    const { facts } = this.props;

    return (
      <div>
        <NavLink to="/">
          <img className="review-container-image" src={orbital} alt="Orbital" />
        </NavLink>
        <h2 className="week-title">Week 1 Review</h2>
        <CardOne {...facts[page]} key={page} />
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
  facts: state.glossary
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ReviewContainer)
);
