import useGetMyLocation from "../../hooks/useGetMyLocation";
import useWeatherStore from "../../store";
export default function Header() {
    const { getMyLocation } = useGetMyLocation();
    const setSearchVisible = useWeatherStore(
        (state) => state.setSearchWindowVisible
    );
    const changeLocation = () => {
        getMyLocation();
    };
    return (
        <div className="flex justify-between items-center py-3 px-3 lg:px-11">
            <button
                className=" bg-[#6E707A] py-3 px-5 font-medium text-base"
                onClick={() => setSearchVisible(true)}
            >
                Search for places
            </button>
            <span
                className="material-icons-outlined bg-[#6E707A] rounded-full px-1 py-1 cursor-pointer"
                onClick={changeLocation}
            >
                my_location
            </span>
        </div>
    );
}
