import React from 'react';
import CardOne from '../../containers/CardOne/CardOne';
import { connect } from 'react-redux';
import './ReviewContainer.css';

const ReviewContainer = props => {
  let facts = props.facts.slice(0, 9);
  const setOneQuestions = facts.map((subject, index) => (
    <CardOne subject={subject.name} answer={subject.definition} key={index} />
  ));

  return (
    <div>
      <h2>Orbital</h2>
      <h2>Week 1 Review</h2>
      <div>{setOneQuestions}</div>
    </div>
  );
};

export const mapStateToProps = state => ({
  facts: state.facts
});

export default connect(
  mapStateToProps,
  null
)(ReviewContainer);
