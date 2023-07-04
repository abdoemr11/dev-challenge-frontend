import { useState } from "react"
import SearchInput from "./SearchInput"
import CityHelper from "./CityHelper"
import SearchButton from "./SearchButton"

export default function SearchModal({ isModalVisible, setModalVisible }: { isModalVisible: boolean, setModalVisible: any }) {
    //TODO replace with real city
    const cities = ['sdfasdf', 'adfa', 'asdfadf', 'adfa']
    const [isCityFocus, setCityFocus] = useState<boolean>(false)
    return (<div className={`fixed  h-[90vh] w-full pt-5 pb-6 bg-white top-0 left-0 z-10 px-4 mx-auto 
                            ${isModalVisible ? "" : "hidden"}`}>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-textPrimary text-xs   font-bold  ">Edit your search</h2>
            <span onClick={() => setModalVisible(false)}>x</span>
        </div>
        <div className=" grid sm:grid-cols-3  shadow-header rounded-2xl  bg-[#f2f2f2]">
            <SearchInput label="location" placeholder="add a city" raduisLocation="t" setFocus={setCityFocus} />
            <SearchInput label="Guests" placeholder="add guests" raduisLocation="b" />
            <div className="bg-white rounded-r-2xl hidden sm:block ">
                <SearchButton additionalStyle=" " />

            </div>
        </div>

        <div className="grid  gap-x-4 sm:grid-cols-2">
            {isCityFocus ? <CityHelper cities={cities} /> : null}
            {/* <GuestHelper /> */}
        </div>
        {/* places which user can choose from */}


        <SearchButton additionalStyle=" absolute bottom-4 left-1/2 translate-x-[-50%] sm:hidden" />
    </div>)
}

function Widget({ order }: { order: '1' | '2' }) {

    return <div className={`bg-lime-500  sm:col-start-${order} `} >
        <p>{order}  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque. Tempora distinctio magni voluptate ut, illo quibusdam molestiae adipisci. Quo?</p>
    </div >
}