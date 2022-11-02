import React, { useState } from 'react';
import { StyledListElement } from './ListElement.style';

const ListElement = ({ content, subText }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		if (subText) {
			setIsOpen(!isOpen);
		}
	};

	return (
		<>
			<StyledListElement
				open={isOpen}
				onClick={handleOpen}
				onMouseLeave={() => {
					setIsOpen(false);
				}}
			>
				<p className='title'>{content}</p>
				{subText &&
					subText.map((element, index) => {
						return (
							<>
								<p className='subText' key={index}>
									{element}
								</p>
							</>
						);
					})}
			</StyledListElement>
		</>
	);
};

export default ListElement;
