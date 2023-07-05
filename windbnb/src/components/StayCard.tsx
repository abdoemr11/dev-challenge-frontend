import { Stay } from "../types";

export default function StayCard({ stay }: { stay: Stay }) {
    return (
        <div className=" space-y-2">
            <img
                className="  max-h-[260px] w-full rounded-3xl sm:max-h-[230px]"
                src={stay.photo}
                alt={stay.title}
            />
            <div className="flex items-center justify-between ">
                {stay.superHost ? (
                    <p className=" rounded-xl border border-[#4f4f4f] px-3 py-2 text-xs font-bold uppercase text-[#4f4f4f]">
                        super host
                    </p>
                ) : null}

                <p className="text-sm font-medium text-[#828282]">
                    {stay.type}
                </p>
                <div className=" flex items-center">
                    <span className="material-icons !text-sm text-[#EB5757B8]">
                        star
                    </span>
                    <span className="text-sm font-medium text-[#4f4f4f]">
                        {stay.rating}
                    </span>
                </div>
            </div>
            <h2 className="text-base font-semibold text-textPrimary">
                {stay.title}
            </h2>
        </div>
    );
}
