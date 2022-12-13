import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';

const CoursesCalendarPage = () => {
	const { departmentName, courseName } = useParams();
	const [courseEvents, setCourseEvents] = useState([]);

	console.log('departmentName: ', departmentName);
	console.log('courseName: ', courseName);

	useEffect(() => {
		fetchCourseEvents();
	}, []);

	const fetchCourseEvents = async () => {
		const response = await fetch(
			`http://localhost:9000/rip-mock-api/courses/${departmentName}/${courseName}`
		);
		const data = await response.json();

		const calendarData = data.map(element => {
			return {
				title: `${element.subjectShort} ${element.room}`,
				start: `${element.date}T${element.timeStart}`,
				end: `${element.date}T${element.timeEnd}`,
				className: `${element.type}`,
				allDay: false,
				extendedProps: {
					description: `${element.subjectLong} ${element.room} ${element.groupName} ${element.professor}`,
				},
			};
		});
		setCourseEvents(calendarData);
		console.log('data: ', data);
		console.log('calendarData: ', calendarData);
	};

	return (
		<div>
			<Calendar events={courseEvents} />
		</div>
	);
};

export default CoursesCalendarPage;
