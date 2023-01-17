import React from 'react';
import styled from 'styled-components';
import spinner from '../../spinner.svg';

const StyledSpinner = styled.img`
	height: 60px;
	position: absolute;
	right: 0;
	top: 0;
	margin: 0;
	padding: 0;
`;

const Spinner = () => {
	return <StyledSpinner src={spinner} alt='Loading...' />;
};

export default Spinner;
