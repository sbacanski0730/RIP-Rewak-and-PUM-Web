import React from 'react';
import { StyledSmallList } from './SmallList.style';

const SmallList = ({ children }) => {
	return (
		<>
			<StyledSmallList>{children}</StyledSmallList>
		</>
	);
};

export default SmallList;
