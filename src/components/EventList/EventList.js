import React from 'react';
import EventFlyer from './EventFlyer/EventFlyer';
import './EventList.css';

const EventList = ({ events }) => (
	<div className='event-list'>
		{events.map((eachEvent) => {
			return <EventFlyer event={eachEvent} />
		})}
	</div>
);

export default EventList;