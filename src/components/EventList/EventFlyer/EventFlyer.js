import React from 'react';
import './EventFlyer.css';
import { DateTime } from "luxon";
import { LazyLoadImage } from "react-lazy-load-image-component";
import defaultImage from '../../../assets/default.png';

const EventFlyer = ({ event }) => {
  function dateSuffix(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return (s[(v - 20) % 10] || s[v] || s[0]);
  }

  const eventDate = DateTime.fromISO(event.date);
  const formattedEventDate = eventDate.toFormat("EEEE, MMMM d") + dateSuffix(eventDate.day) + eventDate.toFormat(", yyyy")
  return (
    <div className='event-flyer'>
      <div className='cover'>
        <LazyLoadImage
          className='cover-img'
          src={event.imageUrl}
          loading='lazy'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultImage;
          }}
        />
      </div>
      <div className='content'>
        <div className='content-scrollable'>
          <p className='event-name'>{event.name}</p>
          <p className='event-date'>{formattedEventDate} </p>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventFlyer;