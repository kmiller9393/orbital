import React, { Component } from 'react';
import CardOne from '../../containers/CardOne/CardOne';
import { withRouter } from 'react-router-dom';
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

  moveBack = () => {
    const { page } = this.state;
    const { history, facts } = this.props;

    if (page < 1) {
      return;
    }

    this.setState({ page: page - 1 });
    history.replace(`/review-one/${facts[page].name}`);
  };

  moveForward = () => {
    const { page } = this.state;
    const { history, facts } = this.props;

    if (page > 7) {
      return;
    }

    this.setState({ page: page + 1 });
    history.replace(`/review-one/${facts[page].name}`);
  };

  render() {
    const { page } = this.state;
    const { facts } = this.props;

    return (
      <div>
        <img className="review-container-image" src={orbital} alt="Orbital" />
        <h2 className="week-title">Week 1 Review</h2>
        <CardOne {...facts[page]} key={page} />
        <div className="button-container">
          <button className="review-container-button" onClick={this.moveBack}>
            Previous
          </button>
          <button
            className="review-container-button"
            onClick={this.moveForward}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  facts: state.facts
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ReviewContainer)
);
