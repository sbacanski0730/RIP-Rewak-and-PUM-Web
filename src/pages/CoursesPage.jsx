import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';
import Spinner from '../components/Spinner/Spinner';

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
	const [isLoading, setIsLoading] = useState(true);
	let regex = /(.*?)\s+\((.*?)\)/;

	useEffect(() => {
		fetchCourses();
	}, []);

	const fetchCourses = async () => {
		const resources = await fetch(`https://s1.celber.pl/courses/${departmentName}`);
		const data = await resources.json();
		setCoursesList(data);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? <Spinner /> : null}
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
