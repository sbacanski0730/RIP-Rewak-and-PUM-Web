import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.style';

const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<div className='link-wrapper'>
					<Link to={'/'}>Home</Link>
				</div>
				<div className='link-wrapper'>
					<Link to={'/workers'}>Szukaj pracownika</Link>
				</div>
				<div className='link-wrapper'>
					<Link to={'/rooms'}>Szukaj sali</Link>
				</div>
			</StyledNavbar>
		</>
	);
};

export default Navbar;
