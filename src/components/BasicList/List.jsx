import React from 'react';
import ListElement from '../ListElement/ListElement';
import { StyledList } from './List.style';

const List = ({ list }) => {
	console.log(list);
	return (
		<>
			<StyledList>
				{list.map((item, index) => {
					return (
						<>
							<ListElement key={index} content={item.name} />
						</>
					);
				})}
			</StyledList>
		</>
	);
};

export default List;
