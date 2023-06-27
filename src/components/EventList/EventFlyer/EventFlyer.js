/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './EventFlyer.css';
import { DateTime } from "luxon";


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
				<img className='cover-img' src={event.imageUrl} />
			</div>
			<div className='content'>
				<p className='event-name'>{event.name}</p>
				<p className='event-date'>{formattedEventDate} </p>
				<p>{event.description}</p>
			</div>
		</div>
	);
}

export default EventFlyer;