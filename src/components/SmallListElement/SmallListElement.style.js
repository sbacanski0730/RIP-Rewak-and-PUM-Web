import styled from 'styled-components';

export const StyledSmallListElement = styled.div`
	/* border: 1px dotted white; */
	margin: 5px 0;
	a {
		text-decoration: none;
		color: #fff;
		position: relative;
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
	}

	a:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
