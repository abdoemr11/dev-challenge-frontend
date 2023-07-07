import winner from "../assets/undraw_winners_ao2o 2.svg";
import useScreenshot from "../hooks/useScreenShot";
import useCountryStore from "../store";

export default function Lose() {
    const score = useCountryStore((state) => state.score);
    const reset = useCountryStore((state) => state.restart);

    const [targetRef, takeScreenShot] = useScreenshot();
    return (
        <div
            ref={targetRef}
            className="bg-white py-8 px-4 sm:py-16 sm:px-8  w-[29rem]  
                            max-w-[calc(100%-1rem)] sm:max-w-full rounded-3xl 
                            flex flex-col justify-between items-center gap-y-12"
        >
            <img src={winner} alt="final score" />
            <div className="text-center">
                <h2 className="text-5xl font-bold">Results</h2>
                <p className="text-lg text-[#1D355D] ">
                    You got
                    <span className="text-[#6FCF97] text-4xl mx-1">
                        {score}
                    </span>
                    correct answers
                </p>
            </div>
            <button
                onClick={() => reset()}
                className="text-lg text-[#1D355D] py-5 px-14 border border-[#1D355D] rounded-lg font-semibold"
            >
                Try Again
            </button>
            <button onClick={() => takeScreenShot()}>take screenshot</button>
        </div>
    );
}
