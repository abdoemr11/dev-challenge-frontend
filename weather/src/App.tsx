import TodayWeatherSummary from "./components/TodayWeather";

function App() {
    return (
        <main className="flex flex-col sm:flex-row">
            <TodayWeatherSummary />
            <section>
                <div>Five Days</div>
                <div>Today Highlights</div>
            </section>
        </main>
    );
}

export default App;
