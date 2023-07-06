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
    const checkAnswer = () => {
        if (!isRightAnswer) {
            losetGame();
            return;
        }
        increaseScore();
        setRoundQuestion();
    };
    return (
        <div
            className="flex gap-x-12 px-5 py-3 border-2 border-[#6066D0B2] rounded-xl
                    text-[#6066D0CC] font-medium  cursor-pointer 
                     hover:text-white hover:bg-[#F9A826] sm:text-lg"
            onClick={checkAnswer}
        >
            <p>{String.fromCharCode(65 + index)}</p>

            {text}
        </div>
    );
}
