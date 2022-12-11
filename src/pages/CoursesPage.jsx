import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import List from '../components/List/List';
import OpenListElement from '../components/OpenListElement/OpenListElement';

const StyledCoursesPage = styled.div`
	/* border: 1px dotted white; */

	max-height: 600px;
	overflow: hidden;
	overflow-y: scroll;
	padding-right: 5px;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.06);
		border-radius: 100vw;
	}

	::-webkit-scrollbar-thumb {
		background-color: #fff;
		border-radius: 100vw;
	}

	::-webkit-scrollbar-button {
		display: none;
	}
`;

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
			<StyledCoursesPage>
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
			</StyledCoursesPage>
		</>
	);
};

export default CoursesPage;
