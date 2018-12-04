import React, { Component } from 'react';
import './EventCard.css';

export default class EventCard extends Component {
  render() {
    const { image, date, description, title } = this.props;

    return (
      <div className="card-container">
        <img className="card-image" src={image} alt="Space Event of the Day" />
        <h4 className="event-card-title">{title}</h4>
        <p className="card-date">{date}</p>
        <p className="card-description">{description}</p>
      </div>
    );
  }
}
