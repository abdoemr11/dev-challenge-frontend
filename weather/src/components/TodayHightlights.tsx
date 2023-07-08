import useFetchWeather from "../hooks/useFetchWeather";
import { Weather, getWeatherFromApi, isValidApiData } from "../types";

export default function TodayHighlights() {
    const { weather, error, isLoading } = useFetchWeather();

    return (
        <section className="text-primary font-bold px-6 py-6">
            <h2 className="text-2xl">Today’s Hightlights </h2>
            <div className="bg-lightBlue pt-5">
                <h2>Wind status</h2>
                <div className="">
                    <span>{weather.wind.mph}</span>mph
                </div>
                <div>
                    <span
                        className={`material-icons-outlined  rotate-[140deg] rotate-[${weather.wind.degree}deg]`}
                    >
                        navigation
                    </span>
                </div>
            </div>
        </section>
    );
}
