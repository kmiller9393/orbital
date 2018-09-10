import React, { Component } from 'react';
import Home from '../Home/Home';
import Review from '../../containers/Review/Review';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/one-review" component={ReviewContainer} />
      </div>
    );
  }
}
