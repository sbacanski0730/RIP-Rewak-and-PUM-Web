import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage.jsx';
import RoomsGroupsPage from './pages/RoomsGroupsPage.jsx';
import RoomsSearchPage from './pages/RoomsSearchPage';
import WorkerSearchPage from './pages/WorkerSearchPage.jsx';
import WorkersGroupsPage from './pages/WorkersGroupsPage.jsx';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route
						exact
						path='/courses/:departmentsName'
						element={<CoursesPage />}
					/>
					<Route exact path='/workers' element={<WorkersGroupsPage />} />
					<Route
						exact
						path='/workers/:departmentName'
						element={<WorkerSearchPage />}
					/>
					// TODO: create page with worker calendar
					<Route exact path='/rooms' element={<RoomsGroupsPage />} />
					<Route exact path='/rooms/:roomName' element={<RoomsSearchPage />} />
					// TODO: create page with rooms calendar
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
