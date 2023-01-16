import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';
import Spinner from '../components/Spinner/Spinner';

const WorkerCalendarPage = () => {
	const [calendarData, setCalendarData] = useState([]);
	const { departmentName, workerName } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchCalendarData();
	}, []);

	const fetchCalendarData = async () => {
		const response = await fetch(
			`https://s1.celber.pl/workers-group/${departmentName}/${workerName}`
		);
		const data = await response.json();

		const calendarData = data.map(element => {
			let regex = /\((.*?)\)/;
			return {
				title: `${element.subject} ${element.room}`,
				start: `${element.timeStart.date.replace(' ', 'T')}`,
				end: `${element.timeEnd.date.replace(' ', 'T')}`,
				className: `${regex.exec(element.subject)[1]}`,
				allDay: false,
				extendedProps: {
					description: `${element.subject}(full) ${element.room}`,
				},
			};
		});
		setCalendarData(calendarData);
		setIsLoading(false);
	};

	return (
		<div>
			{isLoading ? <Spinner /> : null}
			<Calendar events={calendarData} />
		</div>
	);
};

export default WorkerCalendarPage;
