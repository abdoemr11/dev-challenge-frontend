import useFetchWeather from "../hooks/useFetchWeather";
import { toDateFormat } from "../utils";

export default function FutureForecast() {
    const { futureWeather, error, isLoading } = useFetchWeather();
    console.log(futureWeather);

    if (isLoading || !futureWeather) return <p>Loading</p>;
    return (
        <div className="flex flex-wrap gap-x-6 gap-y-8 justify-center">
            {futureWeather.map((futureDay, i) => (
                <div className="text-primary font-medium w-[7.5rem]  py-5 bg-lightBlue flex flex-col items-center">
                    <h3 className="text-base font-medium">
                        {i === 0 ? "Tommorow" : toDateFormat(futureDay.date)}
                    </h3>
                    <img
                        src={futureDay.condition.icon}
                        alt={futureDay.condition.text}
                    />
                    <div className=" space-x-4">
                        <span>{futureDay.temp.C.min}C</span>
                        <span>{futureDay.temp.C.max}C</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
