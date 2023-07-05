import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import CityHelper from "./CityHelper";
import SearchButton from "./SearchButton";
import useStayStore from "../services/store";

export default function SearchModal({
    isModalVisible,
    setModalVisible,
}: {
    isModalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [isCityFocus, setCityFocus] = useState<boolean>(false);
    const { searchCity, setSearchCity } = useStayStore((state) => state);
    const [searchGuest, setSearchGuest] = useStayStore((state) => [
        state.searchGuest,
        state.setSearchGuest,
    ]);
    const { setFilteredLocations, stays } = useStayStore((state) => state);
    useEffect(() => {
        const cityCountryPairs = stays.map(
            (stay) => stay.city + ", " + stay.country
        );
        const filteredLoc = cityCountryPairs.filter((city) =>
            city.toLowerCase().includes(searchCity)
        );
        setFilteredLocations([...new Set(filteredLoc)]);
    }, [searchCity]);
    return (
        <div
            className={`fixed left-0 top-0 z-10 mx-auto h-[90vh] w-full bg-white px-4 pb-6 pt-5 sm:min-h-[50vh] 
                            ${isModalVisible ? "" : "hidden"}`}
        >
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xs font-bold   text-textPrimary  ">
                    Edit your search
                </h2>
                <span
                    className="material-icons cursor-pointer"
                    onClick={() => setModalVisible(false)}
                >
                    close
                </span>
            </div>
            <div className=" grid rounded-2xl  bg-[#f2f2f2] font-[Mulish]  shadow-header sm:grid-cols-3">
                <SearchInput
                    label="location"
                    placeholder="add a city"
                    raduisLocation="t"
                    setFocus={setCityFocus}
                    value={searchCity}
                    setValue={setSearchCity}
                />
                <SearchInput
                    label="Guests"
                    placeholder="add guests"
                    raduisLocation="b"
                    value={searchGuest}
                    setValue={setSearchGuest}
                    type="number"
                />
                <div className="hidden rounded-r-2xl bg-white sm:block ">
                    <SearchButton
                        additionalStyle=" "
                        onClick={setModalVisible}
                    />
                </div>
            </div>

            <div className="grid  gap-x-4 sm:grid-cols-2">
                {isCityFocus ? <CityHelper /> : null}
                {/* <GuestHelper /> */}
            </div>
            {/* places which user can choose from */}

            <SearchButton
                additionalStyle=" absolute bottom-4 left-1/2 translate-x-[-50%] sm:hidden"
                onClick={setModalVisible}
            />
        </div>
    );
}
