import { shallow } from "zustand/shallow";
import useStayStore from "../services/store";

export default function SearchButton({
    additionalStyle,
    onClick,
}: {
    additionalStyle: string;
    onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const setFilterdStays = useStayStore((state) => state.setFilterdStays);
    const [stays, searchCity, searchGuest] = useStayStore(
        (state) => [state.stays, state.searchCity, state.searchGuest],
        shallow
    );
    const filterdStays = () => {
        const newStays = stays.filter((stay) => {
            const cityCountryPair = stay.city + ", " + stay.country;
            return (
                stay.maxGuests >= searchGuest &&
                cityCountryPair.toLowerCase().includes(searchCity.toLowerCase())
            );
        });
        setFilterdStays(newStays);
        setTimeout(() => {
            onClick(false);
        }, 500);
    };
    return (
        <button
            className={
                " mx-auto mt-auto block rounded-2xl bg-cred px-6 py-4 text-sm font-bold text-[#f2f2f2] shadow-header" +
                additionalStyle
            }
            onClick={filterdStays}
        >
            <span className="material-icons mr-2 align-middle text-white">
                search
            </span>
            Search
        </button>
    );
}
