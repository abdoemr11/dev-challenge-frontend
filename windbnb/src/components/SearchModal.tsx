export default function SearchModal() {
    //TODO replace with real city
    const cities = ['sdfasdf', 'adfa', 'asdfadf', 'adfa']

    return (<div className=" fixed h-[90vh] w-full pt-5 pb-6 bg-white top-0 left-0 z-10 px-4 mx-auto">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-textPrimary text-xs   font-bold  ">Edit your search</h2>
            <span>x</span>
        </div>
        <div className=" shadow-header rounded-2xl space-y-[2px] bg-[#f2f2f2]">
            <div className=" px-6 py-3 bg-white rounded-t-2xl">
                <h3 className="text-textPrimary text-[9px] font-extrabold">Location</h3>
                <p className="text-textPrimary text-sm font-normal">Helsinki, Finland</p>
            </div>
            <div className=" px-6 py-3 bg-white rounded-b-2xl">
                <h3 className="text-textPrimary text-[9px] font-extrabold">Guests</h3>
                <input className="text-textPrimary text-sm font-normal placeholder::text-[#bdbdbd] outline-none"
                    placeholder="Add Guests"
                />
            </div>
        </div>
        {/* places which user can choose from */}
        <div className="mt-1 py-8 flex flex-col gap-9 px-8">
            {cities.map(city =>
                <div className="flex gap-4 items-center">
                    <span className="text-[#4f4f4f]">icon</span>
                    <p className="text-[#4f4f4f] text-sm"

                    >
                        {city}
                    </p>
                </div>
            )}

        </div>
        <button className=" block bg-cred text-[#f2f2f2] text-sm font-bold px-6 py-4 rounded-2xl shadow-header mx-auto mt-auto"

        >
            Search
        </button>
    </div>)
}