import FutureForecast from "./components/FutureForecast";
import TodayHighlights from "./components/TodayHightlights";
import TodayWeatherSummary from "./components/TodayWeatherSummary";

function App() {
    return (
        <main className="flex flex-col sm:flex-row">
            <TodayWeatherSummary />
            <section className=" flex flex-1 bg-darkBlue  flex-col justify-evenly gap-8 pt-8 sm:pt-0">
                <FutureForecast />
                <TodayHighlights />
            </section>
        </main>
    );
}

export default App;
