import FutureForecast from "./components/FutureForecast";
import TodayHighlights from "./components/TodayHightlights";
import TodayWeatherSummary from "./components/TodayWeatherSummary";

function App() {
    return (
        <main className="flex flex-col sm:flex-row">
            <TodayWeatherSummary />
            <section className="flex-1 bg-darkBlue ">
                <FutureForecast />
                <TodayHighlights />
            </section>
        </main>
    );
}

export default App;
