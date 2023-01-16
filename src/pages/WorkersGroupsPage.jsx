import React, { useEffect, useState } from 'react';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';
import Spinner from '../components/Spinner/Spinner';

const WorkersGroupsPage = () => {
	const [departmentsList, setDepartmentsList] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchDepartments();
	}, []);

	const fetchDepartments = async () => {
		const response = await fetch('https://s1.celber.pl/workers-group', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		});
		const data = await response.json();
		setDepartmentsList(data);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? <Spinner /> : null}
			<List>
				{departmentsList &&
					departmentsList.map((item, index) => {
						return (
							<ListElement
								text={item.name}
								link={`/workers/${item.name}`}
								key={index}
							/>
						);
					})}
			</List>
		</>
	);
};

export default WorkersGroupsPage;
