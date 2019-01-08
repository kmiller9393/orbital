import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import EventCard from '../../components/EventCard/EventCard';
import orbital from '../../images/orbital-header.svg';
import backArrow from '../../images/left-arrow.svg';
import loadingGif from '../../images/loading-globe.gif';
import './CurrentEvents.css';

class CurrentEvents extends Component {
  render() {
    const { spaceEvents } = this.props;

    const eventCards = spaceEvents.map(item => (
      <EventCard {...item} key={item.id} />
    ));

    return (
      <div className="current-event-container">
        {!spaceEvents.length ? (
          <img className="loading-gif" src={loadingGif} alt="loading" />
        ) : (
          ''
        )}
        {spaceEvents.length ? (
          <div className="review-header-container">
            <NavLink to="/">
              <img className="back-arrow" src={backArrow} alt="Navigate Back" />
            </NavLink>
            <NavLink to="/">
              <img
                className="events-header-image"
                src={orbital}
                alt="Orbital"
              />
            </NavLink>
          </div>
        ) : (
          ''
        )}
        {spaceEvents.length ? <div>{eventCards}</div> : ''}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  spaceEvents: state.spaceEvents
});

export default connect(
  mapStateToProps,
  null
)(CurrentEvents);
