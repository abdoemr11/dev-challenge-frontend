import Lose from "./components/Lose";
import Questions from "./components/Questions";
import useCountryStore from "./store";
import { useEffect } from "react";
import { Country, isCountry } from "./types";
import axios from "axios";
import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});
function App() {
    const gameStatus = useCountryStore((state) => state.gameStatus);
    const setCountries = useCountryStore((state) => state.setCountries);
    const setRoundQuestion = useCountryStore((state) => state.setRoundQuestion);
    const countries = useCountryStore((state) => state.allCountries);
    useEffect(() => {
        const getCountries = async () => {
            const res = await axios.get("https://restcountries.com/v3.1/all");
            const unvalidatedData: unknown = res.data;

            if (!Array.isArray(unvalidatedData)) return;
            const validatedContries: Country[] =
                unvalidatedData.filter(isCountry);

            const cleanCountries = validatedContries.map((c) => ({
                name: c.name.common,
                capital: c.capital[0],
                flag: c.flags.svg,
            }));

            setCountries(cleanCountries);
            setRoundQuestion();
        };
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getCountries();
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
                <p>Loading</p>
            ) : gameStatus == "playing" ? (
                <Questions />
            ) : (
                <Lose />
            )}
        </main>
    );
}

export default App;
