import { useState } from 'react';

export const useLocalStorage = (key, val) => {
	const [value, setValue] = useState(val);
	useEffect(() => {
		const stored = localStorage.getItem(key);
		setValue(stored ? JSON.parse(stored) : val);
	}, [val, key]);
	useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
	return [value, setValue];
};
