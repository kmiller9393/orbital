import React from 'react';
import CardOne from '../../containers/CardOne/CardOne';
import { marsReview } from '../../utils/questions';
import './ReviewContainer.css';

const ReviewContainer = () => {
  const setOneQuestions = marsReview.map((question, index) => (
    <CardOne question={question} key={index} />
  ));

  return (
    <div>
      <h2>Orbital</h2>
      <h2>Week 1 Review</h2>
      <div>{setOneQuestions}</div>
    </div>
  );
};

export default ReviewContainer;
