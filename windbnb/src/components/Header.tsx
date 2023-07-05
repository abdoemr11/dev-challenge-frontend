import logo from "../../src/assets/logo.png";
import useStayStore from "../services/store";

export default function Header({ setModalVisible }: { setModalVisible: any }) {
    const [searchCity, searchGuest] = useStayStore((state) => [
        state.searchCity,
        state.searchGuest,
    ]);
    return (
        <header className="align-item container mb-3 flex flex-wrap items-center  justify-between gap-y-10 py-6   ">
            <a href="/">
                <img className="max-w-full" src={logo} alt="windbnb" />
            </a>
            <div
                className=" flex  items-center gap-x-[2px] rounded-2xl bg-[#f2f2f2] font-[Mulish] text-xs shadow-header sm:text-base"
                onClick={() => {
                    setModalVisible(true);
                }}
            >
                <p className=" rounded-l-2xl bg-white  px-3 py-4 text-textPrimary">
                    {searchCity || "Search for City"}
                </p>
                <p className="bg-white px-3 py-4 text-[#bdbdbd]">
                    {searchGuest ? searchGuest + " Guests" : "Add guests"}
                </p>
                <p className=" material-icons h-full rounded-r-2xl bg-white px-3 py-3 !text-base text-[#EB5757E5] sm:py-4">
                    <span className=" !text-sm text-[#EB5757E5] ">search</span>
                </p>
            </div>
        </header>
    );
}
