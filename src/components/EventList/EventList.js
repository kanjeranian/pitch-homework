import React, { useEffect, useState } from 'react';
import EventFlyer from './EventFlyer/EventFlyer';
import './EventList.css';
import { DateTime } from 'luxon';

const EventList = ({ events, isSortedByEventDateAsc }) => {

  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const sortEvents = () => {
      const sorted = [...events].sort((a, b) => {
        const dateA = DateTime.fromISO(a.date);
        const dateB = DateTime.fromISO(b.date);
        return isSortedByEventDateAsc ? dateA - dateB : dateB - dateA;
      });
      setSortedEvents(sorted);
    };
    sortEvents();
  }, [events, isSortedByEventDateAsc]);

  return (
    <div className='event-list-container'>
  {   events.length > 1 ? <div className='event-list'>
        {isSortedByEventDateAsc}
        {sortedEvents.map((eachEvent) => {
          return <EventFlyer event={eachEvent} key={'event' + eachEvent.id} />
        })}
      </div> : <div className='loading'>Loading...</div>}
    </div>
  );
}

export default EventList;