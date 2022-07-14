import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Active from './pages/active';
import Archive from './pages/archive';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Active />} />
				<Route path="/archive" element={<Archive />} />
			</Routes>
		</Router>
	);
}