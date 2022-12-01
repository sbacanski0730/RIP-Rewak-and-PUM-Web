import React, { useEffect, useState } from 'react';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';

const WorkersGroupsPage = () => {
	const [departmentsList, setDepartmentsList] = useState();

	useEffect(() => {
		fetchDepartments();
	}, []);

	const fetchDepartments = async () => {
		const response = await fetch('http://localhost:9000/rip-mock-api/workers-group', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		});
		const data = await response.json();
		setDepartmentsList(data);
	};

	return (
		<>
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
