import { myAPIKey } from "./API_key.js";

{
    let form = document.getElementById('search');
    // console.log(form);

    async function handleSubmit(e){
        e.preventDefault();
        // console.log(e);
        let city = e.target.city.value;
        console.log(city);
        let cityInfo = await getWeather(city);
        buildWeather(cityInfo);
        // console.log(cityInfo);
        e.target.city.value = '';
    }

    async function getWeather(city){
        let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ myAPIKey }&units=imperial`);
        console.log(response);
        let data = await response.json();
        return data
    }

    function buildWeather(cityObj){

        let forecast = document.getElementById('forecast');
        let desc = cityObj.weather[0].description;
        forecast.innerHTML = `Today's Forecast: ${desc}`;

        let cityName = document.getElementById('cityName');
        cityName.innerHTML = cityObj.name;

        let highBody = document.getElementById('high');
        highBody.innerHTML = `${cityObj.main.temp_max}\u00B0 F`;

        let lowBody = document.getElementById('low');
        lowBody.innerHTML = `${cityObj.main.temp_min}\u00B0 F`;

        let currentBody = document.getElementById('current');
        currentBody.innerHTML = `${cityObj.main.temp}\u00B0 F`;

        let feelsLikeBody = document.getElementById('feelsLike')
        feelsLikeBody.innerHTML = `${cityObj.main.feels_like}\u00B0 F`;

        return desc.toUpperCase();

    }

    form.addEventListener('submit', handleSubmit);
}
