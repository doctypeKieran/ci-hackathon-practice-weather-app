// API key
const API_KEY = "74c0c9622dbc77c3141941ffe2d92183";

// DOM Elements
const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');


async function getWeatherData() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=74c0c9622dbc77c3141941ffe2d92183&units=metric");
    const data = await response.json();

    if (response.ok) {
        const weatherArray = data.list;
        for (let i = 0; i < weatherArray.length; i++) {
            const unixStamp = weatherArray[i].dt;
            console.log((new Date(unixStamp * 1000)).getUTCHours());
        }
    } else {
        console.error("AAAAHHH!!");
        throw new Error(data.error);
    }
}

getWeatherData();

/*  
FORMULA FOR FIVE DAY FORECAST
8 - ((currentHour % 3) + 1)
*/