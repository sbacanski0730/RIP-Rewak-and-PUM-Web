import styled from 'styled-components';

export const StyledSmallList = styled.div`
	/* border: 1px dotted white; */

	padding-left: 15px;
	display: flex;
	flex-direction: column;

	max-height: 450px;
	overflow: hidden;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 4px;
		background-color: transparent;
		/* background-color: white; */
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.06);
		/* background-color: transparent; */
		border-radius: 100vw;
	}

	::-webkit-scrollbar-thumb {
		/* position: relative; */
		background-color: #fff;
		border-radius: 100vw;
	}

	::-webkit-scrollbar-button {
		display: none;
	}
`;
