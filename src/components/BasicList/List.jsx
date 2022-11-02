import React from 'react';
import ListElement from '../ListElement/ListElement';
import { StyledList } from './List.style';

const mainSearchElements = [
	{
		name: 'Wydział Nauk o Zdrowiu i Kulturze Fizycznej',
		children: ['Dietetyka1', 'Dietetyka2'],
	},
	{
		name: 'Wydział Nauk Technicznych i Ekonomicznych',
		children: ['Informatyke1', 'Informatyke2'],
	},
	{
		name: 'Wydział Nauk Społecznych i Humanitarnych',
		children: ['Dziennikarstwo1', 'Dziennikarstwo2'],
	},
	{
		name: 'Wychowanie Fizyczne',
		children: ['Dziennikarstwo1', 'Dziennikarstwo2'],
	},
	{
		name: 'Erazmus',
		children: ['INT 1 - studia stacjonarne'],
	},
	{
		name: 'Szukaj pracownika',
		children: [
			'Wydział Nauk o Zdrowiu i Kulturze Fizycznej',
			'Dziennikarstwo2',
			'Wydział Nauk Technicznych i Ekonomicznych',
			'Wydział Nauk Społecznych i Humanitarnych',
			'Erazmus',
			'Wychowanie Fizyczne',
		],
	},
	{
		name: 'Szukaj sali',
		children: [
			'BudynekA',
			'BudynekB',
			'BudynekC',
			'BudynekD',
			'BudynekE',
			'BudynekDS',
		],
	},
];

const List = () => {
	console.log(mainSearchElements);
	return (
		<>
			<StyledList>
				{mainSearchElements.map((item, index) => {
					return (
						<>
							<ListElement
								key={index}
								content={item.name}
								subText={item.children}
							/>
						</>
					);
				})}
			</StyledList>
		</>
	);
};

export default List;
