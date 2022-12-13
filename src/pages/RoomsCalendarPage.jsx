import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';

const RoomsCalendarPage = () => {
	console.log('roomsCalendarPage');
	const { buildingName, roomNumber } = useParams();
	const [roomEvents, setRoomEvents] = useState([]);
	console.log('buildingName: ', buildingName);
	console.log('roomNumber: ', roomNumber);

	useEffect(() => {
		fetchRoomCalendar();
	}, []);

	const fetchRoomCalendar = async () => {
		const response = await fetch(
			`http://localhost:9000/rip-mock-api/rooms/${buildingName}/${roomNumber}`
		);
		const data = await response.json();

		const calendarData = data.map(element => {
			return {
				title: `${element.subject} ${element.professor}`,
				start: `${element.date}T${element.timeStart}`,
				end: `${element.date}T${element.timeEnd}`,
				allDay: false,
				extendedProps: {
					description: `${element.subject} ${element.professor}`,
				},
			};
		});

		setRoomEvents(calendarData);
	};

	return (
		<div>
			<Calendar events={roomEvents} />
		</div>
	);
};

export default RoomsCalendarPage;
