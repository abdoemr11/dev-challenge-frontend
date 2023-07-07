import Lose from "./components/Lose";
import Questions from "./components/Questions";
import useCountryStore from "./store";
import { useEffect } from "react";
import { Country, RestCountry, isCountry } from "./types";
import axios from "axios";
import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});
const getCountries = async (): Promise<Country[]> => {
    try {
        const res = await axios.get<unknown[]>(
            "https://restcountries.com/v3.1/all"
        );
        const unvalidatedData: unknown[] = res.data;

        if (!Array.isArray(unvalidatedData)) return [];
        const validatedCountries: RestCountry[] =
            unvalidatedData.filter(isCountry);

        const cleanCountries = validatedCountries.map((c) => ({
            name: c.name.common,
            capital: c.capital[0],
            flag: c.flags.svg,
        }));

        return cleanCountries;
    } catch (error) {
        console.error("Failed to fetch countries:", error);
        return [];
    }
};
const getCountriesFromLocal = () => {
    const countriesFromLocalStorage = localStorage.getItem("countries");
    if (countriesFromLocalStorage) {
        const parsedCountries: Country[] = JSON.parse(
            countriesFromLocalStorage
        ) as Country[];
        return parsedCountries;
    }
};
function App() {
    const gameStatus = useCountryStore((state) => state.gameStatus);
    const setCountries = useCountryStore((state) => state.setCountries);
    const countries = useCountryStore((state) => state.allCountries);
    const setRoundQuestion = useCountryStore((state) => state.setRoundQuestion);
    useEffect(() => {
        const fetchCountries = async (): Promise<void> => {
            const parsedCountries = getCountriesFromLocal();
            if (Array.isArray(parsedCountries) && parsedCountries.length > 0) {
                setCountries(parsedCountries);
                setRoundQuestion();
            } else {
                console.log("fetching data");

                const fetchedCountries: Country[] = await getCountries();
                setCountries(fetchedCountries);
                setRoundQuestion();

                localStorage.setItem(
                    "countries",
                    JSON.stringify(fetchedCountries)
                );
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchCountries();
    }, []);

    return (
        <main className="container mx-auto flex flex-col justify-center items-center mt-20 max-w-fit">
            <Helmet helmetData={helmetData}>
                <title>Country Quiz</title>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <h1 className="uppercase text-2xl text-[#f2f2f2] font-bold sm:text-4xl mb-3 justify-start mr-auto">
                country quiz
            </h1>
            {countries.length == 0 ? (
                <p>Loading The Main Board</p>
            ) : gameStatus == "playing" ? (
                <Questions />
            ) : (
                <Lose />
            )}
        </main>
    );
}

export default App;
