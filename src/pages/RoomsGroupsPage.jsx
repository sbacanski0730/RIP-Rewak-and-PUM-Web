import React, { useEffect, useState } from 'react';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';
import Spinner from '../components/Spinner/Spinner';

const RoomsGroupsPage = () => {
	const [buildings, setBuildings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchBuildings();
	}, []);

	const fetchBuildings = async () => {
		const response = await fetch('https://s1.celber.pl/rooms');
		const data = await response.json();
		setBuildings(data);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? <Spinner /> : null}
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
