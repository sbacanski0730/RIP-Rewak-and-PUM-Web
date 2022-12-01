import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSmallListElement } from '../SmallListElement/SmallListElement.style';
const SmallListElement = ({ text, link }) => {
	return (
		<>
			<StyledSmallListElement>
				<Link to={link}>{text}</Link>
			</StyledSmallListElement>
		</>
	);
};

export default SmallListElement;
