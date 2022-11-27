import React from 'react';
import { useParams } from 'react-router-dom';
import List from '../components/BasicList/List';
import coursesMock from '../mocks/coursesMock.json';

const CoursesPage = () => {
	console.log('departmentName: ', useParams().departmentName);
	return <List list={coursesMock} />;
};

export default CoursesPage;
