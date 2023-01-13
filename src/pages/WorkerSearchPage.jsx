import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';
import SmallList from '../components/SmallList/SmallList';
import SmallListElement from '../components/SmallListElement/SmallListElement';

import { useParams } from 'react-router-dom';

const StyledWorkerSearchPage = styled.div`
	width: 100%;
	height: 400px;
`;

const WorkerSearchPage = () => {
	const { departmentName } = useParams();
	const [workersList, setWorkersList] = useState();
	const [filteredList, setFilteredList] = useState();

	useEffect(() => {
		fetchWorkers();
	}, []);

	const fetchWorkers = async () => {
		const response = await fetch(
			`https://s1.celber.pl/workers-group/${departmentName}`
		);
		const data = await response.json();
		setWorkersList(data);
		setFilteredList(data);
	};

	const filterList = e => {
		if (workersList) {
			let chars = e.target.value;
			setFilteredList(
				workersList.filter(e =>
					e.name.toLowerCase().includes(chars.toLowerCase())
				)
			);
		} else {
			console.log('No matches');
		}
	};

	return (
		<>
			<StyledWorkerSearchPage>
				<Input placeholder={'Szukaj po nazwisku'} filterList={filterList} />
				<SmallList>
					{workersList &&
						filteredList.map((item, index) => {
							return (
								<SmallListElement
									text={item.name}
									link={`/workers/${departmentName}/${item.name}`}
									key={index}
								/>
							);
						})}
				</SmallList>
			</StyledWorkerSearchPage>
		</>
	);
};

export default WorkerSearchPage;
