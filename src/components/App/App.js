import React, { Component } from 'react';
import Home from '../Home/Home';
import Review from '../../containers/Review/Review';
import ReviewContainer from '../../containers/ReviewContainer/ReviewContainer';
import TriviaContainer from '../../containers/TriviaContainer/TriviaContainer';
import Trivia from '../../containers/Trivia/Trivia';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={Review} />
        <Route path="/review-one" component={ReviewContainer} />
        <Route exact path="/trivia-center" component={Trivia} />
        <Route path="/trivia-one" component={TriviaContainer} />
        <Route path="/trivia-two" component={TriviaContainer} />
        <Route path="/trivia-three" component={TriviaContainer} />
        <Route path="/trivia-four" component={TriviaContainer} />
        <Route path="/trivia-five" component={TriviaContainer} />
      </div>
    );
  }
}
