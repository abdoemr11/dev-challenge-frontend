import { Todo } from "../types";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function NonCompletedList({
    todos,
    toggleTodo,
    addTodo,
}: {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    addTodo: (todo: Todo) => void;
}) {
    const [inputValue, setInputValue] = useState<string>("");
    const crateNewTodo = (): void => {
        if (inputValue === "") return;
        const newTodo: Todo = {
            id: todos.length + 1,
            text: inputValue,
            isFinished: false,
        };
        addTodo(newTodo);
        setInputValue("");
    };
    return (
        <div className="py-5 ">
            <div className="mb-8 flex justify-between gap-6">
                <input
                    className="flex-1 rounded-xl  border border-[#bdbdbd] px-3 py-5 text-sm text-[#828282] outline-none"
                    type="text"
                    placeholder="add details"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
                <input
                    className="cursor-pointer rounded-xl bg-cblue px-10 py-5 font-semibold text-white"
                    type="submit"
                    value="Add"
                    onClick={crateNewTodo}
                />
            </div>
            <div className=" space-y-7">
                {todos.map((todo) => (
                    <TodoItem todo={todo} toggleTodo={toggleTodo} />
                ))}
            </div>
        </div>
    );
}
