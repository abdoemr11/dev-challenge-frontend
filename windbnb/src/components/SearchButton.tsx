import { shallow } from "zustand/shallow"
import useStayStore from "../services/store"

export default function SearchButton({ additionalStyle }: { additionalStyle: string }) {
    const setFilterdStays = useStayStore(state => state.setFilterdStays)
    const [stays, searchCity, searchGuest] = useStayStore(state => [state.stays, state.searchCity, state.searchGuest], shallow)
    const filterdStays = () => {
        const newStays = stays.filter(stay => {
            return (stay.maxGuests >= searchGuest) && stay.city.toLowerCase().includes(searchCity.toLowerCase())
        })
        setFilterdStays(newStays)
    }
    return (
        <button
            className={" block bg-cred text-[#f2f2f2] text-sm font-bold px-6 py-4 rounded-2xl shadow-header mx-auto mt-auto" + additionalStyle}
            onClick={filterdStays}
        >
            Search
        </button>

    )
}