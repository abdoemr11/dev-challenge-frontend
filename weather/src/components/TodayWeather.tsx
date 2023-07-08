import cloudback from "../assets/Cloud-background.png";
import currentWeather from "../assets/HeavyCloud.png";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const urlstr = `https://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_WEATHER_API
}&q=48.8567,2.3508&days=5&aqi=no&alerts=no`;
export default function TodayWeatherSummary() {
    const { data, error, isLoading } = useSWR(urlstr, fetcher);
    console.log(data);
    if (isLoading) return <p>Loading</p>;
    return (
        <section className="bg-lightBlue text-primary ">
            <div className="flex justify-between items-center py-3 px-3 sm:px-11">
                <button className=" bg-[#6E707A] py-3 px-5 font-medium text-base">
                    Search for places
                </button>
                <span className="material-icons-outlined bg-[#6E707A] rounded-full px-1 py-1">
                    my_location
                </span>
            </div>
            <div className="relative h-[300px] py-10 overflow-hidden">
                <img
                    src={cloudback}
                    alt="cloud background"
                    className="  scale-150 opacity-5"
                />
                {/* current weather symbol TODO changed later from api */}
                <img
                    src={data.current.condition.icon}
                    alt=""
                    className=" absolute bottom-[calc(50%-2.5rem)] left-1/2 -translate-x-1/2 w-32"
                />
            </div>
        </section>
    );
}
