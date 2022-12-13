import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './globalStyles';
import CoursesCalendarPage from './pages/CoursesCalendarPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage.jsx';
import RoomsCalendarPage from './pages/RoomsCalendarPage';
import RoomsGroupsPage from './pages/RoomsGroupsPage.jsx';
import RoomsSearchPage from './pages/RoomsSearchPage';
import WorkerCalendarPage from './pages/WorkerCalendarPage';
import WorkerSearchPage from './pages/WorkerSearchPage.jsx';
import WorkersGroupsPage from './pages/WorkersGroupsPage.jsx';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route
						exact
						path='/courses/:departmentName'
						element={<CoursesPage />}
					/>
					<Route
						exact
						path='/courses/:departmentName/:courseName'
						element={<CoursesCalendarPage />}
					/>
					<Route exact path='/workers' element={<WorkersGroupsPage />} />
					<Route
						exact
						path='/workers/:departmentName'
						element={<WorkerSearchPage />}
					/>
					// TODO: create page with worker calendar
					<Route
						exact
						path='/workers/:departmentName/:workerName'
						element={<WorkerCalendarPage />}
					/>
					<Route exact path='/rooms' element={<RoomsGroupsPage />} />
					<Route
						exact
						path='/rooms/:buildingName'
						element={<RoomsSearchPage />}
					/>
					<Route
						exact
						path='/rooms/:buildingName/:roomNumber'
						element={<RoomsCalendarPage />}
					/>
					// TODO: create page with rooms calendar
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
