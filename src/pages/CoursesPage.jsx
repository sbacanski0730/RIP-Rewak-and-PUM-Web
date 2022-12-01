import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../components/List/List';
import OpenListElement from '../components/OpenListElement/OpenListElement';

const CoursesPage = () => {
	const [coursesList, setCoursesList] = useState([]);
	const { departmentsName } = useParams();
	console.log('departmentsName: ', departmentsName);

	useEffect(() => {
		fetchCourses();
	}, []);

	const fetchCourses = async () => {
		const resources = await fetch(
			`http://localhost:9000/rip-mock-api/courses/${departmentsName}`
		);
		const data = await resources.json();
		setCoursesList(data);
	};

	return (
		<>
			<List>
				{coursesList &&
					coursesList.map((item, index) => {
						return (
							<OpenListElement
								name={item.name}
								children={item.children}
								key={index}
							/>
						);
					})}
			</List>
		</>
	);
};

export default CoursesPage;
