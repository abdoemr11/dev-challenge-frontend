import { useState } from "react";
import useCountryStore from "../store";

export default function SingleQuestion({
    text,
    isRightAnswer,
    index,
}: {
    text: string;
    isRightAnswer: boolean;
    index: number;
}) {
    const losetGame = useCountryStore((state) => state.lose);
    const increaseScore = useCountryStore((state) => state.increaseScore);
    const setRoundQuestion = useCountryStore((state) => state.setRoundQuestion);
    const [resultStyle, setResultStyle] = useState<string>("lol");
    const [disabled, setDisabled] = useState<boolean>(false);
    const [answerStatus, setAnswerStatus] = useState<
        "correct" | "wrong" | "unanswered"
    >("unanswered");
    const checkAnswer = () => {
        if (disabled) return;
        setDisabled(true);
        if (!isRightAnswer) {
            setAnswerStatus("wrong");
            setResultStyle("bg-[#EA8282] hover:text-unset text-white");

            setTimeout(() => {
                losetGame();
                setRoundQuestion();
            }, 1000);
            return;
        }
        setAnswerStatus("correct");

        setResultStyle("bg-[#60BF88] hover:text-unset text-white");
        setTimeout(() => {
            increaseScore();
            setRoundQuestion();
        }, 1000);
    };
    console.log(resultStyle);

    return (
        <div
            className={
                `flex gap-x-12 px-5 py-3 border-2 border-[#6066D0B2] rounded-xl
                    text-[#6066D0CC] font-medium  cursor-pointer 
                    ${
                        !disabled ? "hover:text-white hover:bg-[#F9A826]" : ""
                    }  sm:text-lg text-unset ` + resultStyle
            }
            onClick={checkAnswer}
        >
            <p>{String.fromCharCode(65 + index)}</p>
            {text}
            {answerStatus !== "unanswered" ? (
                <span
                    className="block w-6 h-6 material-icons-outlined ml-auto rounded-[50%] font-bold border-2 !text-sm text-center 
                text-white border-white"
                >
                    {answerStatus === "correct" ? "done" : "close"}
                </span>
            ) : null}
        </div>
    );
}
