const geo = 'http://api.openweathermap.org/geo/1.0/direct?appid=846080dfd0648555293c3f43584d7738&q=';
const url = 'https://api.openweathermap.org/data/2.5/weather?appid=846080dfd0648555293c3f43584d7738&lat=';

const makeImg = (src, size) => {
    const img = document.createElement('img');
    img.src = src;
    img.width = size;
    img.height = size;
    return img;
}

const makeP = (text) => {
    const p = document.createElement('p');
    p.innerHTML = text;
    return p
}

const clearContent = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    return main
}

const makeContent = (val) => {
    const article = document.createElement('article');
    const footer = document.createElement('div');
    const tempDiv = document.createElement('div');
    const humDiv = document.createElement('div');

    tempDiv.appendChild(makeImg('assets/temp.png', 30));
    tempDiv.appendChild(makeP(Math.floor(val.main.temp - 273) + '°C'));
    humDiv.appendChild(makeImg('assets/humid.png', 30));
    humDiv.appendChild(makeP(val.main.humidity + '%'));
    footer.appendChild(tempDiv);
    footer.appendChild(humDiv);
    article.appendChild(makeImg('https://openweathermap.org/img/wn/' + val.weather[0].icon + '@2x.png', 120));
    article.appendChild(footer);

    return article;
}

const submit = () => {
    const query = input.value.toLowerCase();
    if (!query)
        return

    const main = document.getElementById('main');
    main.innerHTML = "";
    fetch(geo + query)
        .then(res => res.json())
        .then(val => {
            const key = latlon2key(val[0]['lat'], val[0]['lon']);
            if (window.localStorage.getItem(key))
                fav.src = 'assets/fav.png';
            else
                fav.src = 'assets/unfav.png';
            return fetch(url + val[0]['lat'] + '&lon=' + val[0]['lon'])
        })
        .then(res => res.json())
        .then(val => main.appendChild(makeContent(val)))
        .catch(err => console.log(err));
}

const latlon2key = (lat, lon) => '' + lat + ':' + lon;

const toggleFav = () => {
    const query = input.value.toLowerCase();
    if (!query)
        return

    fetch(geo + query)
        .then(res => res.json())
        .then(val => {
            const key = latlon2key(val[0]['lat'], val[0]['lon']);
            if (window.localStorage.getItem(key)) {
                window.localStorage.removeItem(key);
                fav.src = 'assets/unfav.png'
            }
            else {
                window.localStorage.setItem(key, query);
                fav.src = 'assets/fav.png'
            }
        })
        .catch(err => console.log(err));
}

const favIndex = (shift) => {
    index = (index + favs.length + shift) % favs.length
    key = favs[index][0].split(':')

    fetch(url + key[0] + '&lon=' + key[1])
        .then(res => res.json())
        .then(val => {
            document.getElementById('title').innerHTML = favs[index][1].toUpperCase();
            document.getElementById('icon').src = 'https://openweathermap.org/img/wn/' + val.weather[0].icon + '@2x.png'
            document.getElementById('temp').innerHTML = Math.floor(val.main.temp - 273) + '°C';
            document.getElementById('humid').innerHTML = val.main.humidity + '%'
        })
        .catch(err => console.log(err));
}

let fav;
let input;
const favs = Object.entries(window.localStorage);
let index = 0;
window.onload = () => {
    fav = document.getElementById('fav');
    input = document.getElementById('query');
    if (input)
        input.addEventListener('keypress', ev => {
            if (ev.key === 'Enter') {
                ev.preventDefault();
                submit();
                input.blur();
            }
        });

    try {
        favIndex(0);
    }
    catch {

    }
}