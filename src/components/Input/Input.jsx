import React from 'react';
import { StyledInput } from './Input.style';

const Input = ({ placeholder, filterList }) => {
	return (
		<>
			<StyledInput>
				<input type='text' placeholder={placeholder} onChange={filterList} />
			</StyledInput>
		</>
	);
};

export default Input;
