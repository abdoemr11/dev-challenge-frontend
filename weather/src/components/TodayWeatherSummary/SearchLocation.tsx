import { useState } from "react";
import useWeatherStore from "../../store";
import { City } from "../../types";
import josnCities from "../../../../cities.json";
export default function SearchLocation() {
    const setSearchVisible = useWeatherStore(
        (state) => state.setSearchWindowVisible
    );
    const [cities, setCities] = useState<City[]>([]);
    const setLocation = useWeatherStore((state) => state.setLocation);

    const allCities = josnCities as City[];

    const updateSearchCities = (e: React.FormEvent<HTMLInputElement>) => {
        setCities([]);
        const searchText = e.currentTarget.value.toLowerCase();
        const matchedCities: City[] = [];

        for (
            let i = 0;
            i < allCities.length && matchedCities.length < 10;
            i++
        ) {
            if (allCities[i]?.name?.toLowerCase().startsWith(searchText)) {
                matchedCities.push(allCities[i]);
            }
        }
        setCities(matchedCities);
    };

    const changeLocation = (city: City) => {
        setLocation({ latitude: city.latitude, longitude: city.longitude });
        setTimeout(() => {
            setSearchVisible(false);
        }, 500);
    };
    return (
        <div className=" absolute w-full h-full bg-lightBlue z-10 p-3">
            <span
                className="block w-fit ml-auto material-icons-outlined cursor-pointer"
                onClick={() => {
                    setSearchVisible(false);
                }}
            >
                close
            </span>
            <div className="flex gap-3 mt-6">
                <div className=" flex-1 relative">
                    <input
                        className="  w-full py-3 pl-10 bg-transparent border border-primary outline-none
                         placeholder:text-secondary
                            "
                        type="text"
                        placeholder="search location"
                        onChange={updateSearchCities}
                    />
                    <span className=" material-icons-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">
                        search
                    </span>
                </div>
                {/* <input
                    className=" px-5 bg-[#3C47E9] border border-[#3C47E9]"
                    type="submit"
                    value="Search"
                /> */}
            </div>
            {cities.length === 0 && <p className="mt-9">No matches found</p>}
            <ul className="mt-9">
                {cities.map((city) => (
                    <li
                        className="font-medium text-base text-primary px-3 py-6 flex justify-between cursor-pointer
                                    hover:border [:hover&>span]:inline"
                        key={city.id}
                        onClick={() => changeLocation(city)}
                    >
                        {city.name} {", "} {city.country}
                        <span className=" material-icons-outlined hidden text-secondary ">
                            chevron_right
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
