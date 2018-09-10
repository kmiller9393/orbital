import React, { Component } from 'react';
import MarsCard from '../../containers/MarsCard/MarsCard';
import { marsReview } from '../../utils/questions';
import './MarsReview.css';

const MarsReview = () => {
  const marsQuestions = marsReview.map((question, index) => (
    <MarsCard question={question} key={index} />
  ));

  return (
    <div>
      <h2>Orbital</h2>
      <h2>Mars Review</h2>
      <div>{marsQuestions}</div>
    </div>
  );
};

export default MarsReview;
