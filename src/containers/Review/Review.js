import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import backArrow from '../../images/left-arrow.svg';
import loadingGif from '../../images/loading-globe.gif';
import './Review.css';

class Review extends Component {
  handleRoute = e => {
    const { name } = e.target;

    const { history } = this.props;

    history.push(name);
  };

  render() {
    const { glossary } = this.props;

    return (
      <div className="review-container">
        {!glossary.length ? (
          <img className="loading-gif" src={loadingGif} alt="loading" />
        ) : (
          ''
        )}
        {glossary.length ? (
          <div className="review-header-container">
            <NavLink to="/">
              <img className="back-arrow" src={backArrow} alt="Navigate Back" />
            </NavLink>
            <NavLink to="/">
              <img
                className="review-header-image"
                src={orbital}
                alt="Orbital"
              />
            </NavLink>
          </div>
        ) : (
          ''
        )}
        {glossary.length ? (
          <h2 className="review-header">Weekly Reviews</h2>
        ) : (
          ''
        )}
        {glossary.length ? (
          <div className="review-button-container">
            <button
              className="review-button review-page-link"
              name="/review-one"
              onClick={this.handleRoute}
            >
              Week 1
            </button>
            <button
              className="review-button review-page-link"
              name="/review-two"
              onClick={this.handleRoute}
            >
              Week 2
            </button>
            <button
              className="review-button review-page-link"
              name="/review-three"
              onClick={this.handleRoute}
            >
              Week 3
            </button>
            <button
              className="review-button review-page-link"
              name="/review-four"
              onClick={this.handleRoute}
            >
              Week 4
            </button>
            <button
              className="review-button review-page-link"
              name="/review-five"
              onClick={this.handleRoute}
            >
              Week 5
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  glossary: state.glossary
});

export default connect(
  mapStateToProps,
  null
)(Review);
