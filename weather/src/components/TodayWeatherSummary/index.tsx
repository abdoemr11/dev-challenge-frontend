import cloudback from "../../assets/Cloud-background.png";
import useFetchWeather from "../../hooks/useFetchWeather";
import useWeatherStore from "../../store";
import { toDateFormat } from "../../utils";
import Header from "./Header";
import SearchLocation from "./SearchLocation";

export default function TodayWeatherSummary() {
    const { weather, isLoading } = useFetchWeather();
    const isSearchVisible = useWeatherStore(
        (state) => state.searchWindowVisible
    );
    if (isLoading || !weather) return <p>Loading</p>;
    return (
        <section className="bg-lightBlue text-primary pb-12 sm:basis-1/3 relative">
            {isSearchVisible && <SearchLocation />}
            <Header />
            <div className="relative h-[300px] py-10 overflow-hidden">
                <img
                    src={cloudback}
                    alt="cloud background"
                    className="  scale-150 opacity-5"
                />
                {/* current weather symbol TODO changed later from api */}
                <img
                    src={weather.condition.icon}
                    alt={weather.condition.text}
                    className=" absolute bottom-[calc(50%-2.5rem)] left-1/2 -translate-x-1/2 w-32"
                />
            </div>
            <div className="flex gap-y-20 flex-col  items-center">
                <div>
                    <span className="text-[144px] text-primary">
                        {weather.temp.C}
                    </span>
                    <span className=" text-5xl text-secondary">C</span>
                </div>
                <p className="text-3xl text-secondary font-semibold">
                    {weather.condition.text}
                </p>
                <div className="text-lg text-[#88869D] font-medium items-center">
                    <p className="flex gap-4">
                        <span>Today</span> <span>.</span>{" "}
                        <span>{toDateFormat(weather.date)}</span>
                    </p>
                    <div className="flex justify-center items-center mt-8">
                        <span className="material-icons-outlined">
                            location_on
                        </span>
                        <span>{weather.location}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
