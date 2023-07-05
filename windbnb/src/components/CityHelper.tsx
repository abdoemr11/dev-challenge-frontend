import useStayStore from "../services/store";

export default function CityHelper() {
    const cities = useStayStore((state) => state.filteredLocations);
    const setSearchCity = useStayStore((state) => state.setSearchCity);
    const selectCity = (city: string) => {
        console.log(city);
        console.log("hello");
        setSearchCity(city);
    };
    return (
        <div className="mt-1 py-2  flex flex-col  gap-4 sm:gap-9 px-8 sm:grid-start-1">
            {cities.map((city) => (
                <div
                    className="flex gap-4 items-center hover:bg-[#e0e0e0] cursor-pointer py-4 pl-2 rounded-2xl"
                    onClick={() => selectCity(city)}
                >
                    <span className="material-icons !text-sm text-[#EB5757B8] align-middle">
                        star
                    </span>
                    <p className="text-[#4f4f4f] text-sm">{city}</p>
                </div>
            ))}
        </div>
    );
}
