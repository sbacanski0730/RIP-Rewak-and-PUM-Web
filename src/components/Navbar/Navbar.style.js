import styled from 'styled-components';

export const StyledNavbar = styled.div`
	/* border: 1px solid white; */

	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 20px;
	padding: 10px 10px;

	.link-wrapper {
		padding: 10px 10px;

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
			transition: transform 0.09s ease-out;
		}

		a:hover {
			cursor: pointer;
		}

		a:hover::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}
`;
