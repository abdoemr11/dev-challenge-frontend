import useSWR from 'swr';
import {ApiData, SummaryWeaher, Weather, getForecastFromApi, getWeatherFromApi} from '../types';
import { useEffect, useState } from "react";
import { validateWeather } from '../validate';
import useWeatherStore from '../store';
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function useFetchWeather() {
    const location= useWeatherStore(state=> state.location)
    const urlstr = `https://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_WEATHER_API
}&q=${location.latitude},${location.longitude}&days=5&aqi=no&alerts=no`;

    const { data: weatherData, error, isLoading } = useSWR<ApiData, Error>(urlstr, fetcher);


    const [weather, setWeather] = useState<Weather | null>(null);
    const [futureWeather, setfutureWeather] = useState<SummaryWeaher[] | null>(null);

    useEffect(()=> {
        if (!isLoading &&validateWeather(weatherData)) {
            setWeather(getWeatherFromApi(weatherData as ApiData));
            setfutureWeather(getForecastFromApi(weatherData as ApiData));
            
        } else {
            console.warn(validateWeather.errors);
        }
    },[isLoading, weatherData])


 
    return ( { weather, futureWeather,error, isLoading })
}