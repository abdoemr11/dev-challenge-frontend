import useStayStore from "../services/store"

export default function CityHelper() {
    const cities = useStayStore(state => state.filteredLocations)
    const setSearchCity = useStayStore(state => state.setSearchCity)
    const selectCity = (city: string) => {
        console.log(city);
        console.log('hello');
        setSearchCity(city)
    }
    return (
        <div className="mt-1 py-2 bg-red-500 flex flex-col  gap-4 sm:gap-9 px-8 sm:grid-start-1">
            {cities.map(city =>
                <div className="flex gap-4 items-center" onClick={() => selectCity(city)}>
                    <span className="text-[#4f4f4f]">icon</span>
                    <p className="text-[#4f4f4f] text-sm"

                    >
                        {city}
                    </p>
                </div>
            )}

        </div>
    )
}