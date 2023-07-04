import logo from "../../src/assets/logo.png";
import useStayStore from "../services/store";

export default function Header({ setModalVisible }: { setModalVisible: any }) {
    const [searchCity, searchGuest] = useStayStore((state) => [
        state.searchCity,
        state.searchGuest,
    ]);
    return (
        <header className="flex justify-between align-item items-center flex-wrap container  py-6 mb-3 gap-y-10   ">
            <img className="max-w-full" src={logo} alt="windbnb" />
            <div
                className=" rounded-2xl  text-xs sm:text-base shadow-header flex gap-x-[2px] font-[Mulish] items-center bg-[#f2f2f2]"
                onClick={() => {
                    setModalVisible(true);
                }}
            >
                <p className=" rounded-l-2xl text-textPrimary  bg-white py-4 px-3">
                    {searchCity || "Search for City"}
                </p>
                <p className="bg-white text-[#bdbdbd] py-4 px-3">
                    {searchGuest ? searchGuest + " Guests" : "Add guests"}
                </p>
                <p className=" h-full material-icons rounded-r-2xl !text-base text-[#EB5757E5] bg-white py-3 sm:py-4 px-3">
                    <span className=" !text-sm text-[#EB5757E5] ">search</span>
                </p>
            </div>
        </header>
    );
}
