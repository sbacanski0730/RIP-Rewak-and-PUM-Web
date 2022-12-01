import styled from 'styled-components';

export const StyledListElement = styled.div`
	/* background-color: #d9d9d9; */
	/* border: 2px solid yellow; */

	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	transition: all 0.2s ease-out;

	color: #fff;
	border: 2px solid #fff;
	border-radius: 10px;

	a {
		text-decoration: none;
		width: 100%;
		height: 100%;
		padding: 10px 10px;
	}

	&:hover {
		cursor: pointer;
		background-color: #fff;
		color: #000;

		.title {
			color: #000;
		}
	}

	.title {
		color: #fff;
		font-size: 1.2rem;
		font-weight: 500;
	}
`;
