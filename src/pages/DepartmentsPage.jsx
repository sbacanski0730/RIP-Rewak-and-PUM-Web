import React from 'react';
import List from '../components/BasicList/List';
import departmentsMock from '../mocks/departmentsMock.json';

const DepartmentsPage = () => {
	console.log('departments');
	return <List list={departmentsMock} />;
};

export default DepartmentsPage;
