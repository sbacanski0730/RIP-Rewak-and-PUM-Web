import React from 'react';
import { Link } from 'react-router-dom';
import { StyledListElement } from './ListElement.style';

const ListElement = ({ text, link }) => {
	return (
		<>
			<StyledListElement>
				<Link to={`${link}`}>
					<p className='title'>{text}</p>
				</Link>
			</StyledListElement>
		</>
	);
};

export default ListElement;
