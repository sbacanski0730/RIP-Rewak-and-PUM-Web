import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledOpenListElement } from './OpenListElement.style';

const OpenListElement = ({ name, children, departmentName }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<StyledOpenListElement open={isOpen} onClick={handleOpen}>
				<p className='title'>{name}</p>
				{children &&
					children.map((item, index) => {
						return (
							<Link
								to={`/courses/${departmentName}/${item.name}`}
								key={index}
							>
								<p className='text'>{item.name}</p>
							</Link>
						);
					})}
			</StyledOpenListElement>
		</>
	);
};

export default OpenListElement;
