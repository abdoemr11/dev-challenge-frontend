export default function SearchButton({ additionalStyle }: { additionalStyle: string }) {

    return (
        <button className={" block bg-cred text-[#f2f2f2] text-sm font-bold px-6 py-4 rounded-2xl shadow-header mx-auto mt-auto" + additionalStyle}>
            Search
        </button>

    )
}