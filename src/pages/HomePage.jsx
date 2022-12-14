import React from 'react';
import List from '../components/List/List';
import ListElement from '../components/ListElement/ListElement';

const HomePage = () => {
	return (
		<>
			<List>
				<ListElement
					text={'Wydział Nauk o Zdrowiu i Kulturze Fizycznej'}
					link={'/courses/Wydział Nauk o Zdrowiu i Kulturze Fizycznej'}
				/>
				<ListElement
					text={'Wydział Nauk Technicznych i Ekonomicznych'}
					link={'/courses/Wydział Nauk Technicznych i Ekonomicznych'}
				/>
				<ListElement
					text={'Wydział Nauk Społecznych i Humanistycznych'}
					link={'/courses/Wydział Nauk Społecznych i Humanistycznych'}
				/>
				<ListElement
					text={'Wychowanie Fizyczne'}
					link={'/courses/Wychowanie Fizyczne'}
				/>
				<ListElement text={'Erazmus'} link={'/courses/Erazmus'} />
				<ListElement text={'Szukaj pracownika'} link={'/workers'} />
				<ListElement text={'Szukaj sali'} link={'/rooms'} />
			</List>
		</>
	);
};

export default HomePage;
