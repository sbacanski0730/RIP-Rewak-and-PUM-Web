import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './globalStyles';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage.jsx';
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
					<Route
						exact
						path='/workers/:departmentName/:workerName'
						element={<WorkerCalendarPage />}
					/>
					<Route exact path='/rooms' element={<RoomsGroupsPage />} />
					<Route exact path='/rooms/:roomName' element={<RoomsSearchPage />} />
					// TODO: create page with rooms calendar
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
