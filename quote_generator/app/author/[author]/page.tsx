import Quote from "@/app/components/Quote";

const fetchAuthorQuotes = async (author: string) => {
    const res = await fetch(
        " https://quote-garden.onrender.com/api/v3/quotes?author=" + author
    );
    if (!res.ok) {
        console.log(res);

        throw new Error("Failed to fetch data");
    }
    return res.json();
};
export default async function Page({ params }: { params: { author: string } }) {
    const auhtorQuotes = (await fetchAuthorQuotes(params.author)).data;
    console.log(auhtorQuotes);
    return (
        <div className="space-y-8">
            {auhtorQuotes.map((q: any) => (
                <Quote quoteText={q.quoteText} />
            ))}
        </div>
    );
}
