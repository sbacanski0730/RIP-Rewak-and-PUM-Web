import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';

const WorkerCalendarPage = () => {
	const [calendarData, setCalendarData] = useState([]);
	const { departmentName, workerName } = useParams();
	// console.log('departmentName:', departmentName);
	console.log('workerName:', workerName);

	useEffect(() => {
		fetchCalendarData();
	}, []);

	const fetchCalendarData = async () => {
		const response = await fetch(
			`http://localhost:9000/rip-mock-api/workers/${departmentName}/${workerName}`
		);
		const data = await response.json();

		const calendarData = data.map(element => {
			return {
				title: `${element.subject} ${element.room}`,
				start: `${element.date}T${element.timeStart}`,
				end: `${element.date}T${element.timeEnd}`,
				className: `${element.type}`,
				allDay: false,
				extendedProps: {
					description: `${element.subject} ${element.room}`,
				},
			};
		});
		setCalendarData(calendarData);
	};

	console.log('calendarData: ', calendarData);

	return (
		<div>
			<Calendar events={calendarData} />
		</div>
	);
};

export default WorkerCalendarPage;
