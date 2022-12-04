import React from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';

const WorkerCalendarPage = () => {
	const { departmentName, workerName } = useParams();
	console.log('departmentName:', departmentName);
	console.log('workerName:', workerName);

	const demoEvents = [
		{
			title: '2022-12-04',
			start: '2022-12-04T12:30',
			allDay: false,
		},
		{
			title: '2022-12-05',
			start: '2022-12-05T12:30',
			ends: '2022-12-05T12:50',
			allDay: false,
		},
		{
			title: '2022-12-06T12:30',
			start: '2022-12-06T12:40',
			allDay: false,
		},
	];

	return (
		<div>
			<Calendar events={demoEvents} />
		</div>
	);
};

export default WorkerCalendarPage;
