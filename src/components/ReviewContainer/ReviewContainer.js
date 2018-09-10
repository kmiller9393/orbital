import React, { Component } from 'react';
import CardOne from '../../containers/CardOne/CardOne';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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

    if (page > 45) {
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
        <h2>Orbital</h2>
        <h2>Week 1 Review</h2>
        <CardOne {...facts[page]} key={page} />
        {page > 0 && <button onClick={this.moveBack}>Previous</button>}
        <button onClick={this.moveForward}>Next</button>
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
