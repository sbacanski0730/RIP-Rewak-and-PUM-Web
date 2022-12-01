import React, { useEffect, useState } from 'react';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';

const RoomsGroupsPage = () => {
	const [buildings, setBuildings] = useState([]);

	useEffect(() => {
		fetchBuildings();
	}, []);

	const fetchBuildings = async () => {
		const response = await fetch('http://localhost:9000/rip-mock-api/rooms/');
		const data = await response.json();
		setBuildings(data);
	};

	return (
		<>
			<List>
				{buildings &&
					buildings.map((item, index) => {
						return (
							<ListElement
								text={item.name}
								link={`/rooms/${item.name}`}
								key={index}
							/>
						);
					})}
			</List>
		</>
	);
};

export default RoomsGroupsPage;
