import useFetchWeather from "../hooks/useFetchWeather";

export default function TodayHighlights() {
    const { weather, error, isLoading } = useFetchWeather();

    if (isLoading || !weather) return <p>Loading</p>;

    return (
        <section className="text-primary font-bold  flex flex-col w-[90%] mx-auto">
            <h2 className="text-2xl mb-8 ">Today’s Hightlights </h2>
            <div className="flex flex-wrap gap-8 ">
                <div className="bg-lightBlue pt-5 pb-9 flex flex-col items-center w-[20.5rem]">
                    <h2>Wind status</h2>
                    <div>
                        <div className="">
                            <span className="text-[4rem]">
                                {weather.wind.mph}
                            </span>
                            <span className="text-4xl">mph</span>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <span
                                style={{
                                    rotate: `${weather.wind.degree - 90}deg`,
                                }}
                                className="flex justify-center items-center w-6 h-6  material-icons-outlined p-1 text-base bg-[#616475] rounded-full"
                            >
                                navigation
                            </span>
                            <span>{weather.wind.direction}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-lightBlue pt-5 pb-9 flex flex-col items-center w-[20.5rem]">
                    <h2>Humidity</h2>
                    <div>
                        <div className="">
                            <span className="text-[4rem]">
                                {weather.humidity}
                            </span>
                            <span className="text-4xl font-normal align-bottom">
                                %
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3 w-[80%] text-secondary">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div className="w-[80%] bg-primary h-2">
                        <div
                            style={{ width: `${weather.humidity}%` }}
                            className="bg-[#FFEC65] h-full"
                        ></div>
                        <p className="ml-auto w-fit">%</p>
                    </div>
                </div>
                <div className="bg-lightBlue pt-5 pb-9 flex flex-col items-center w-[20.5rem]">
                    <h2>Visibility</h2>
                    <div>
                        <div className="">
                            <span className="text-[4rem]">
                                {weather.visibility.mile}
                            </span>
                            <span className="text-4xl font-normal ml-2">
                                miles
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-lightBlue pt-5 pb-9 flex flex-col items-center w-[20.5rem]">
                    <h2>Air Pressure</h2>
                    <div>
                        <div className="">
                            <span className="text-[4rem]">
                                {weather.airPressure}
                            </span>
                            <span className="text-4xl font-normal ml-2">
                                mb
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
