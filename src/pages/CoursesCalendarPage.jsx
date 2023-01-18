import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';
import Spinner from '../components/Spinner/Spinner';
import { takeOutSubjectType } from '../utils/takeOutSubjectType';

const CoursesCalendarPage = () => {
	const { departmentName, courseName } = useParams();
	const [courseEvents, setCourseEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchCourseEvents();
	}, []);

	const fetchCourseEvents = async () => {
		const response = await fetch(
			`https://s1.celber.pl/courses/${departmentName}/${courseName}`
		);
		const data = await response.json();

		const calendarData = data.map(element => {
			return {
				title: `${element.subject} ${element.room}`,
				start: `${element.timeStart.date.replace(' ', 'T')}`,
				end: `${element.timeEnd.date.replace(' ', 'T')}`,
				className: `${takeOutSubjectType(element.subject)}`,
				allDay: false,
				extendedProps: {
					description: `${element.subject} ${element.room} ${element.group} ${element.profesor}`,
				},
			};
		});
		setCourseEvents(calendarData);
		setIsLoading(false);
	};

	return (
		<div>
			{isLoading ? <Spinner /> : null}
			<Calendar events={courseEvents} />
		</div>
	);
};

export default CoursesCalendarPage;
