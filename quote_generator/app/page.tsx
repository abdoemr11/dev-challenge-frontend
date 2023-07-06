import Link from "next/link";
import Quote from "./components/Quote";
import { useRouter } from "next/navigation";

const getRandomQuote = async () => {
    const res = await fetch(
        " https://quote-garden.onrender.com/api/v3/quotes/random",
        { cache: "no-cache" }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
export default async function Home() {
    const quote = (await getRandomQuote()).data[0];
    // console.log(quote);
    return (
        <div className=" lg:w-2/3 mx-auto ">
            <Quote quoteText={quote.quoteText} />
            <Link href={"author/" + quote.quoteAuthor}>
                <div
                    className=" flex justify-between mt-24 sm:w-[calc(100%-4rem)] ml-auto  py-12 px-7 hover:bg-[#333]
                    text-[#4f4f4f] hover:text-white items-center"
                >
                    <div>
                        <h2 className="text-2xl   font-bold ">
                            {quote.quoteAuthor}
                        </h2>
                        <p className="text-sm text-[#828282] font-medium">
                            {quote.quoteGenre}
                        </p>
                    </div>
                    <span className="material-icons-outlined text-white">
                        arrow_right_alt
                    </span>
                </div>
            </Link>
        </div>
    );
}
