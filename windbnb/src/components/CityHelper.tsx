export default function CityHelper({ cities }: { cities: string[] }) {

    return (
        <div className="mt-1 py-2 flex flex-col  gap-4 sm:gap-9 px-8 sm:grid-start-1">
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
    )
}