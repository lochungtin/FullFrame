const geo = 'http://api.openweathermap.org/geo/1.0/direct?appid=846080dfd0648555293c3f43584d7738&q=';
const url = 'https://api.openweathermap.org/data/2.5/weather?appid=846080dfd0648555293c3f43584d7738&lat=';

const submit = () => {
    const query = document.getElementById('query').value.toLowerCase();
    const main = document.getElementById('main');
    main.innerHTML = "";

    fetch(geo + query)
        .then(res => res.json())
        .then(val => fetch(url + val[0]['lat'] + '&lon=' + val[0]['lon']))
        .then(res => res.json())
        .then(val => {
            const article = document.createElement('article');
            const mainImg = document.createElement('img');
            mainImg.src = 'https://openweathermap.org/img/wn/' + val.weather[0].icon + '@2x.png';
            mainImg.width = 120;
            mainImg.height = 120;

            const footer = document.createElement('div');
            const tempDiv = document.createElement('div');
            const humDiv = document.createElement('div');

            const tempImg = document.createElement('img');
            const humImg = document.createElement('img');
            tempImg.src = '../assets/temp.png';
            tempImg.width = 30;
            tempImg.height = 30;
            humImg.src = '../assets/humid.png';
            humImg.width = 30;
            humImg.height = 30

            const temp = document.createElement('p');
            temp.innerHTML = '' + Math.floor(val.main.temp - 273) + '°C';

            const hum = document.createElement('p');
            hum.innerHTML = '' + val.main.humidity + '%';

            tempDiv.appendChild(tempImg);
            tempDiv.appendChild(temp);
            humDiv.appendChild(humImg);
            humDiv.appendChild(hum);
            footer.appendChild(tempDiv);
            footer.appendChild(humDiv);
            article.appendChild(mainImg);
            article.appendChild(footer);
            main.appendChild(article);
        })
        .catch(err => console.log(err));
}

window.onload = () => {
    const input = document.getElementById('query');
    input.addEventListener('keypress', ev => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            submit();
            input.blur();
        }
    });
}