import React, { useState } from 'react';
import { StyledInput } from './Input.style';

const Input = ({ placeholder, filterList }) => {
	const [inputValue, setInputValue] = useState();
	return (
		<>
			<StyledInput>
				<input
					type='text'
					placeholder={placeholder}
					value={inputValue}
					onChange={filterList}
				/>
			</StyledInput>
		</>
	);
};

export default Input;
