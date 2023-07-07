import { Country } from "../types";
const questionTypes = [
    "is the capital of",
    "Which country does this flag belong to?",
];
export default function QuestionType({ country }: { country: Country }) {
    const randomIndex = Math.floor(Math.random() * questionTypes.length);
    const questionType = questionTypes[randomIndex];
    return (
        <>
            {randomIndex === 0 ? (
                <h3>
                    {country.capital} {questionType}
                </h3>
            ) : (
                <>
                    <img
                        src={country.flag}
                        alt={country.name}
                        className=" max-w-[5.25rem]"
                    />
                    {questionType}
                </>
            )}
        </>
    );
}
