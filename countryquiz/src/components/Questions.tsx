import useCountryStore from "../store";
import { Country } from "../types";
import SingleQuestion from "./SingleQuestion";
import { useEffect } from "react";
export default function Questions() {
    const roundCountries: Country[] = useCountryStore(
        (state) => state.roundQuestions
    );

    const randomIndex = Math.floor(Math.random() * roundCountries.length);
    console.log("From question", roundCountries);
    console.log("From question", roundCountries);

    if (roundCountries.length == 0 || !roundCountries[0]) return <p>loading</p>;
    return (
        <div className="bg-white py-8 px-4 sm:py-16 sm:px-8  w-[29rem]  max-w-[calc(100%-1rem)] sm:max-w-full rounded-3xl">
            <h3 className="mb-8 text-[#2F527B] sm:text-2xl font-bold">
                {roundCountries[randomIndex].capital} is the capital of
            </h3>
            <div className="grid gap-6">
                {roundCountries.map((country, i) => (
                    <SingleQuestion
                        key={country.capital}
                        text={country.name}
                        isRightAnswer={
                            country.capital ===
                            roundCountries[randomIndex].capital
                        }
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}
