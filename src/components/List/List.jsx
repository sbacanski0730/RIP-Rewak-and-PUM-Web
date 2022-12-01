import React from 'react';
import { StyledList } from './List.style';

const List = ({ children }) => {
	return (
		<>
			<StyledList>{children}</StyledList>
		</>
	);
};

export default List;
