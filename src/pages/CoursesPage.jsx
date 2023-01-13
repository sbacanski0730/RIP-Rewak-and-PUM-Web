import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';

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
	const { departmentName } = useParams();
	let regex = /(.*?)\s+\((.*?)\)/;

	useEffect(() => {
		fetchCourses();
	}, []);

	const fetchCourses = async () => {
		const resources = await fetch(`https://s1.celber.pl/courses/${departmentName}`);
		const data = await resources.json();

		data.map(e => {
			console.log(e);
			// console.log(e.name);
		});

		setCoursesList(data);
	};

	coursesList.map(item => {
		console.log(item.name);
	});

	return (
		<>
			<StyledCoursesPage>
				<List>
					{coursesList &&
						coursesList.map((item, index) => {
							return (
								<ListElement
									key={index}
									text={item.name}
									link={`/courses/${departmentName}/${item.name}`}
								/>
							);
						})}
				</List>
			</StyledCoursesPage>
		</>
	);
};

export default CoursesPage;
