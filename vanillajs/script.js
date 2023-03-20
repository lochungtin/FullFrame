const url = 'http://api.weatherstack.com/current?access_key=f5b9cd140c1564433a8cc4bbb7e6ed8b&query=';

const submit = () => {
    const query = document.getElementById('query').value.toLowerCase();
    fetch(url + query)
        .then(res => res.json())
        .then(val => {
            console.log(val.location)
            const humidity = val.current.humidity;
            const temperature = val.current.temperature;
            const day = val.current.is_day === 'yes' ? 'day' : 'night';
            const code = val.current.weather_code;

            const main = document.getElementById('main');
            main.innerHTML = "";

            const article = document.createElement('article');
            const mainImg = document.createElement('img');
            mainImg.src = '../assets/' + day + '/' + code + '.svg';
            mainImg.width = 90;
            mainImg.height = 90;

            const footer = document.createElement('footer');
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
            temp.innerHTML = '' + temperature + '°C';

            const hum = document.createElement('p');
            hum.innerHTML = '' + humidity + '%';

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