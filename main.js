// API key: abe153b769bca759b27c76dd4e984723
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

{
    const key = "abe153b769bca759b27c76dd4e984723";

    let form = document.getElementById('search');
    console.log(form);

    async function handleSubmit(e){
        e.preventDefault();
        console.log(e);
        let city = e.target.city.value;
        console.log(city);
        let cityInfo = await getWeather(city);
        console.log(cityInfo);
        buildWeather(cityInfo);
        console.log(cityInfo);

        e.target.city.value = '';
    }

    async function getWeather(city){
        let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`);
        console.log(response);
        let data = await response.json();
        return data
    }

    function buildWeather(cityObj){

        let highBody = document.getElementById('high');
        highBody.innerHTML = `${cityObj.main.temp_max}\u00B0 F`;

        let lowBody = document.getElementById('low');
        lowBody.innerHTML = `${cityObj.main.temp_min}\u00B0 F`;

        let currentBody = document.getElementById('current');
        currentBody.innerHTML = `${cityObj.main.temp}\u00B0 F`;

        let feelsLikeBody = document.getElementById('feelsLike')
        feelsLikeBody.innerHTML = `${cityObj.main.feels_like}\u00B0 F`;

    }


    form.addEventListener('submit', handleSubmit);
}
