import styled from 'styled-components';

export const StyledInput = styled.div`
	color: #fff;
	margin-bottom: 15px;
	min-width: 400px;

	input {
		border: 1px solid #fff;
		border-radius: 10px;
		padding: 12px 12px;
		color: #fff;
		/* border: 1px dotted yellow; */
		width: 100%;
		background: transparent;
		font-size: 17px;
		font-family: 'Montserrat', sans-serif;
		letter-spacing: 1px;
		outline: none;
	}

	input::placeholder {
		text-align: left;
		font-size: 17px;
		letter-spacing: 1.6px;
		font-family: 'Montserrat', sans-serif;
		color: rgba(255, 255, 255, 0.65);
	}

	input:focus {
		box-shadow: inset 0px 0px 36px -25px rgba(255, 255, 255, 0.66);
	}
`;
