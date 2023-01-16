import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';
import Spinner from '../components/Spinner/Spinner';

const RoomsCalendarPage = () => {
	const { buildingName, roomNumber } = useParams();
	const [roomEvents, setRoomEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchRoomCalendar();
	}, []);

	const fetchRoomCalendar = async () => {
		const response = await fetch(
			`https://s1.celber.pl/rooms/${buildingName}/${roomNumber}`
		);
		const data = await response.json();

		const calendarData = data.map(element => {
			return {
				title: `${element.subject} ${element.profesor}`,
				start: `${element.timeStart.date.replace(' ', 'T')}`,
				end: `${element.timeEnd.date.replace(' ', 'T')}`,
				allDay: false,
				extendedProps: {
					description: `${element.subject} ${element.profesor}`,
				},
			};
		});

		setRoomEvents(calendarData);
		setIsLoading(false);
	};

	return (
		<div>
			{isLoading ? <Spinner /> : null}
			<Calendar events={roomEvents} />
		</div>
	);
};

export default RoomsCalendarPage;
