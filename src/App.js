import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/BasicList/List.jsx';
import { GlobalStyle } from './globalStyles';
import CoursesPage from './pages/CoursesPage.jsx';
import DepartmentsPage from './pages/DepartmentsPage.jsx';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<DepartmentsPage />}></Route>
					<Route
						exact
						path='/courses/:departmentName'
						element={<CoursesPage />}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
