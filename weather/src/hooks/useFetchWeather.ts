import useSWR from 'swr';
import {ApiData, Weather, getWeatherFromApi, isValidApiData} from '../types';
export default function useFetchWeather() {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const urlstr = `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_API
    }&q=48.8567,2.3508&days=5&aqi=no&alerts=no`;
    const { data: weatherData, error, isLoading } = useSWR<ApiData, Error>(urlstr, fetcher);
    let weather: Weather | null = null;
    if (isValidApiData(weatherData)) {

        weather = getWeatherFromApi(weatherData);
    }
    if(!weather)
    {
        console.log(weather);
        
        // throw new Error('not valid weather data')
    }
    return ( { weather, error, isLoading })
}