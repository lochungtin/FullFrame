const url = 'https://api.openweathermap.org/data/2.5/weather?appid=846080dfd0648555293c3f43584d7738&lat=';


const toggleFav = () => {
    const key = 'fullframe:' + data[0] + ':' + data[1];
    console.log(key);
    if (window.localStorage.getItem(key)) {
        window.localStorage.removeItem(key);
        fav.src = 'assets/unfav.png';
    }
    else {
        window.localStorage.setItem(key, data[2]);
        fav.src = 'assets/fav.png';
    }
}

const shiftFav = shift => {
    index = (index + favs.length + shift) % favs.length
    data = favs[index];
    fetch(url + data[0] + '&lon=' + data[1])
        .then(res => res.json())
        .then(val => {
            document.getElementById('title').innerHTML = data[2].toUpperCase();
            document.getElementById('icon').src = 'https://openweathermap.org/img/wn/' + val.weather[0].icon + '@2x.png'
            document.getElementById('temp').innerHTML = Math.floor(val.main.temp - 273) + '°C';
            document.getElementById('humid').innerHTML = val.main.humidity + '%'
        })
        .catch(err => console.log(err));
}

let fav;
let index = 0;
let data;
const favs = Object
    .keys(window.localStorage)
    .filter(key => key.startsWith('fullframe:'))
    .map(key => {
        const splt = key.split(':').splice(1, 2);
        splt.push(window.localStorage.getItem(key));
        return splt;
    });
window.onload = () => {
    fav = document.getElementById('fav');
    if (favs.length == 0)
        document.getElementById('main').innerHTML = '';
    shiftFav(0);
}