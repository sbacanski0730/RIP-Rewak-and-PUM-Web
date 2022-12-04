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
	const [workersList, setWorkersList] = useState();
	const { departmentName } = useParams();

	useEffect(() => {
		fetchWorkers();
	}, []);

	const fetchWorkers = async () => {
		const response = await fetch(
			`http://localhost:9000/rip-mock-api/workers-group/${departmentName}`
		);
		const data = await response.json();
		setWorkersList(data);
	};

	return (
		<>
			<StyledWorkerSearchPage>
				<Input placeholder={'Szukaj po nazwisku'} />
				<SmallList>
					{workersList &&
						workersList.map((item, index) => {
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
