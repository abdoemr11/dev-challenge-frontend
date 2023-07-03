import { Stay } from "../types";
import StayCard from "./StayCard";

export default function Gallery({ stays }: { stays: Stay[] }) {
    return <main className="container">

        <div className="flex justify-between flex-wrap mb-6 ">
            <h1 className="text-lg text-textPrimary font-bold">Stays in Finland</h1>
            <p>{stays.length}+ stays</p>

        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {
                stays.map(stay => <StayCard key={stay.title} stay={stay} />)
            }
        </div>

    </main>
}