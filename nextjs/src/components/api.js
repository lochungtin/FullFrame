export const geo = async (query) => {
	const res = await fetch(
		'http://api.openweathermap.org/geo/1.0/direct?appid=846080dfd0648555293c3f43584d7738&q=' + query,
	);
	const val = await res.json();
	return {
		name: query,
		lon: val[0]['lon'],
		lat: val[0]['lat'],
	};
};

export const data = async ({ lat, lon }) => {
	const res = await fetch(
		'https://api.openweathermap.org/data/2.5/weather?appid=846080dfd0648555293c3f43584d7738&lat=' +
			lat +
			'&lon=' +
			lon,
	);
	const val = await res.json();
	return {
		temp: Math.floor(val.main.temp - 273),
		humid: val.main.humidity,
		icon: val.weather[0].icon,
	};
};
