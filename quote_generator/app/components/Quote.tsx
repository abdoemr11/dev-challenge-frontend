export default function Quote({ quoteText }: { quoteText: string }) {
    return (
        <p
            className=" pl-16 before:absolute before:right-full top-0 before:bg-[#F7DF94] relative 
                    before:w-4 before:h-full
                    py-2 font-medium 
                    sm:text-2xl md:text-4xl"
        >
            “{quoteText}”
        </p>
    );
}
