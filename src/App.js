import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/BasicList/List.jsx';
import { GlobalStyle } from './globalStyles';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<List />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
