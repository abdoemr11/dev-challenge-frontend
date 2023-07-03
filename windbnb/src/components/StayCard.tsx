import { Stay } from "../types";

export default function StayCard({ stay }: { stay: Stay }) {
    return <div className=" space-y-2">
        <img className="rounded-3xl"
            src={stay.photo} alt={stay.title}
        />
        <div className="flex justify-between items-center ">
            {stay.superHost ? <p className=" uppercase font-bold text-[#4f4f4f] text-xs rounded-xl border border-[#4f4f4f] px-3 py-2">
                super host
            </p> : null}

            <p className="text-[#828282] text-sm font-medium" >{stay.type}</p>
            <div>
                <span className="text-[#EB5757]"></span>
                <span className="text-sm font-medium text-[#4f4f4f]">
                    {stay.rating}
                </span>
            </div>
        </div>
        <h2 className="text-textPrimary text-base font-semibold">{stay.title}</h2>

    </div>
}