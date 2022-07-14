import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { bindData } from './api/firebase';
import Active from './pages/active';
import Archive from './pages/archive';

import activeLogo from './assets/active.svg';
import archiveLogo from './assets/archive.svg';
import './App.css';
import { setActive, setArchive } from './redux/data';

export default function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const activeCount = useSelector(state => state.data.activeCount);
	const archiveCount = useSelector(state => state.data.archiveCount);

	const isActive = location.pathname === '/';

	bindData(active => dispatch(setActive(active)), archive => dispatch(setArchive(archive)));

	return (
		<div className='body'>
			<div className='navbarRoot'>
				<div className='navbar'>
					<Link to='/' className={`navbtn ${isActive ? 'navbtnSelected' : ''}`}>
						<img src={activeLogo} alt='active' width={24} />
						<p className='navtext'>Active({activeCount})</p>
					</Link>
					<Link to='/archive' className={`navbtn ${isActive ? '' : 'navbtnSelected'}`}>
						<img src={archiveLogo} alt='archive' width={20} />
						<p className='navtext'>Archived({archiveCount})</p>
					</Link>
				</div>
			</div>
			<Routes>
				<Route path='/' element={<Active />} />
				<Route path='/archive' element={<Archive />} />
			</Routes>
		</div>
	);
}
