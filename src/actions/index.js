import axios from 'axios';

const API_KEY = 'bfe489f05f858b5a535e09121396458c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(cityName){
    const url = `${ROOT_URL}&q=${cityName},ua`;
    const request = axios.get(url, {crossDomain: true});

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
