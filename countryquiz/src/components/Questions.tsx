import useCountryStore from "../store";
import { Country } from "../types";
import SingleQuestion from "./SingleQuestion";
import personImage from "../assets/undraw_adventure_4hum 1.svg";
export default function Questions() {
    const roundCountries: Country[] = useCountryStore(
        (state) => state.roundQuestions
    );

    const randomIndex = Math.floor(Math.random() * roundCountries.length);
    console.log("From question", roundCountries);
    console.log("From question", roundCountries);

    if (roundCountries.length == 0 || !roundCountries[0]) return <p>loading</p>;
    return (
        <div className="relative bg-white py-8 px-4 sm:py-16 sm:px-8  w-[29rem]  max-w-[calc(100%-1rem)] sm:max-w-full rounded-3xl">
            <img
                src={personImage}
                alt="adventure man"
                className="absolute right-0 top-0 translate-y-[-60%]"
            />
            <div className="mb-8 text-[#2F527B] sm:text-2xl font-bold">
                <h3>{roundCountries[randomIndex].capital} is the capital of</h3>
            </div>
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
