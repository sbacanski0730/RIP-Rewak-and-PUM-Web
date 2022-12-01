import React, { useState } from 'react';
import { StyledInput } from './Input.style';

const Input = ({ placeholder }) => {
	const [inputValue, setInputValue] = useState();
	return (
		<>
			<StyledInput>
				<input type='text' placeholder={placeholder} value={inputValue} />
			</StyledInput>
		</>
	);
};

export default Input;
