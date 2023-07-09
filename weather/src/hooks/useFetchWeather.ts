import useSWR from 'swr';
import {ApiData, Weather, getWeatherFromApi} from '../types';
import { useState } from "react";
import { validateWeather } from '../validate';
const fetcher = (url: string) => fetch(url).then((r) => r.json());
const urlstr = `https://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_WEATHER_API
}&q=30.8567,30.3508&days=5&aqi=no&alerts=no`;
export default function useFetchWeather() {
    const { data: weatherData, error, isLoading } = useSWR<ApiData, Error>(urlstr, fetcher);


    const [weather, setWeather] = useState<Weather | null>(null);

    if (!isLoading && !weather&&validateWeather(weatherData)) {
        setWeather(getWeatherFromApi(weatherData as ApiData));
    } else {
        console.log(validateWeather.errors);
    }
 
    return ( { weather, error, isLoading })
}