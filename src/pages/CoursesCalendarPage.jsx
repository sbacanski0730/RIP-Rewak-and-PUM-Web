import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';

const CoursesCalendarPage = () => {
	const { departmentName, courseName } = useParams();
	const [courseEvents, setCourseEvents] = useState([]);

	useEffect(() => {
		fetchCourseEvents();
	}, []);

	const fetchCourseEvents = async () => {
		const response = await fetch(
			`https://s1.celber.pl/courses/${departmentName}/${courseName}`
		);
		const data = await response.json();

		console.log(data);

		const calendarData = data.map(element => {
			let regex = /\((.*?)\)/;
			return {
				title: `${element.subject} ${element.room}`,
				start: `${element.timeStart.date.replace(' ', 'T')}`,
				end: `${element.timeEnd.date.replace(' ', 'T')}`,
				// className: `${regex.exec(element.subject)[1]}`,
				allDay: false,
				extendedProps: {
					description: `${element.subject} ${element.room} ${element.group} ${element.profesor}`,
				},
			};
		});
		setCourseEvents(calendarData);
	};

	return (
		<div>
			<Calendar events={courseEvents} />
		</div>
	);
};

export default CoursesCalendarPage;
