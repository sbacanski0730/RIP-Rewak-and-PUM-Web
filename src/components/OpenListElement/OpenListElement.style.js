import styled from 'styled-components';

export const StyledOpenListElement = styled.div`
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
	padding: 15px 15px;
	/* padding: 10px 10px; */

	color: #fff;
	border: 2px solid #fff;
	border-radius: 10px;

	&:hover {
		cursor: pointer;
	}

	.title {
		/* border: 1px dotted yellow; */

		width: 100%;
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: ${({ open }) => (open ? '1rem' : '0')};
	}

	a {
		/* border: 1px dashed orange; */

		text-decoration: none;
		margin: 6px 0;
		padding: 1px 0;
		display: ${({ open }) => (open ? 'block' : 'none')};
		color: #fff;
		position: relative;

		.text {
			/* border: 1px dashed orange; */
			/* color: #fff; */
			font-size: 1rem;
		}
	}

	a::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		transform-origin: bottom left;
		transition: transform 0.2s ease-out;
	}
	a:hover {
		cursor: pointer;
		/* background-color: grey; */
	}
	a:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
