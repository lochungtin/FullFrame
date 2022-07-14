import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import Active from './pages/active';
import Archive from './pages/archive';

import activeLogo from './assets/active.svg';
import archiveLogo from './assets/archive.svg';
import './App.css';

export default function App() {
	let location = useLocation();

	let isActive = location.pathname === '/';

	return (
		<div className='body'>
			<div className='navbarRoot'>
				<div className='navbar'>
					<Link to='/' className={`navbtn ${isActive ? 'navbtnSelected' : ''}`}>
						<img src={activeLogo} alt='active' width={24} />
						<p className='navtext'>Active</p>
					</Link>
					<Link to='/archive' className={`navbtn ${isActive ? '' : 'navbtnSelected'}`}>
						<img src={archiveLogo} alt='archive' width={20} />
						<p className='navtext'>Archived</p>
					</Link>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<Active />} />
				<Route path="/archive" element={<Archive />} />
			</Routes>
		</div>
	);
}
