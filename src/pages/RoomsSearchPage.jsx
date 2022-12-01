import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input/Input';
import SmallList from '../components/SmallList/SmallList';
import SmallListElement from '../components/SmallListElement/SmallListElement';

const StyledRoomsSearchPage = styled.div`
	width: 100%;
	height: 400px;
`;

const RoomsSearchPage = () => {
	const [rooms, setRooms] = useState([]);
	const { roomName } = useParams();

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = async () => {
		const response = await fetch(
			`http://localhost:9000/rip-mock-api/rooms/${roomName}`
		);
		const data = await response.json();
		setRooms(data);
	};

	return (
		<>
			<StyledRoomsSearchPage>
				<Input placeholder='Szukaj po sali' />
				<SmallList>
					{rooms &&
						rooms.map((item, index) => {
							return (
								<SmallListElement
									text={item.name}
									link={'/'}
									key={index}
								/>
							);
						})}
				</SmallList>
			</StyledRoomsSearchPage>
		</>
	);
};

export default RoomsSearchPage;
