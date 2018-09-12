import React, { Component } from 'react';
import TriviaCard from '../TriviaCard/TriviaCard';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import orbital from '../../images/orbital-header.svg';
import './TriviaContainer.css';

class TriviaContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <img className="trivia-container-image" src={orbital} alt="Orbital" />
        <h2 className="trivia-title">Week 1 Trivia</h2>
        <TriviaCard />
      </div>
    );
  }
}

export default TriviaContainer;
