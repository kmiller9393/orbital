import React, { Component } from 'react';
import Home from '../../containers/Home/Home';
import Review from '../Review/Review';
import ReviewContainer from '../../containers/ReviewContainer/ReviewContainer';
import TriviaContainer from '../../containers/TriviaContainer/TriviaContainer';
import Trivia from '../Trivia/Trivia';
import Results from '../../containers/Results/Results';
import CurrentEvents from '../../containers/CurrentEvents/CurrentEvents';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={Review} />
        <Route path="/review-one" component={ReviewContainer} />
        <Route path="/review-two" component={ReviewContainer} />
        <Route path="/review-three" component={ReviewContainer} />
        <Route path="/review-four" component={ReviewContainer} />
        <Route path="/review-five" component={ReviewContainer} />
        <Route exact path="/trivia-center" component={Trivia} />
        <Route path="/trivia-one" component={TriviaContainer} />
        <Route path="/trivia-two" component={TriviaContainer} />
        <Route path="/trivia-three" component={TriviaContainer} />
        <Route path="/trivia-four" component={TriviaContainer} />
        <Route path="/trivia-five" component={TriviaContainer} />
        <Route path="/results" component={Results} />
        <Route exact path="/current-events" component={CurrentEvents} />
      </div>
    );
  }
}
