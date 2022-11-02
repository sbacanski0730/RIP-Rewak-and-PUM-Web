import styled from 'styled-components';

export const StyledListElement = styled.div`
	/* background-color: #d9d9d9; */

	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 100px;
	height: 100%;

	padding: 0.4rem 0.7rem;
	transition: all 0.2s ease-out;

	color: #fff;
	border: 2px solid #fff;
	border-radius: 10px;

	&:hover {
		cursor: pointer;
		/* background-color: #cacaca; */
		background-color: #fff;
		color: #000;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: ${({ open }) => (open ? '1rem' : '0')};
	}

	.subText {
		font-size: 1.2rem;
		width: 100%;
		height: 100%;
		/* padding: 0.4rem 0; */
		margin: 2px 0;
		display: ${({ open }) => (open ? 'block' : 'none')};

		&:hover {
			/* color: #432fff; */
			color: #fff;
			/* background-color: #bababa; */
			background-color: #919191;
			border-radius: 5px;
		}
	}
`;
