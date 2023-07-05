import { useState } from "react";
import CompletedList from "./CompletedList";
import { ListType, Todo } from "../types";
import NonCompletedList from "./NonCompletedList";
const initalTodo: Todo[] = [
    { text: "Buy groceries", isFinished: false, id: 1 },
    { text: "Clean the house", isFinished: false, id: 2 },
    { text: "Go for a run", isFinished: false, id: 3 },
    { text: "Finish the report", isFinished: false, id: 4 },
    { text: "Schedule a meeting", isFinished: false, id: 5 },
    { text: "Pay the bills", isFinished: false, id: 6 },
    { text: "Read a book", isFinished: false, id: 7 },
    { text: "Call a friend", isFinished: false, id: 8 },
    { text: "Organize the closet", isFinished: false, id: 9 },
    { text: "Plan a vacation", isFinished: false, id: 10 },
];

export default function Content() {
    const [activeList, setActiveList] = useState<ListType>("all");
    const lists: ListType[] = ["all", "active", "completed"];

    const [todos, setTodos] = useState<Todo[]>(initalTodo);
    const addTodo = (newTodo: Todo): void => {
        setTodos([...todos, newTodo]);
    };
    const removeTodo = (removedId: number): void => {
        const newTodos = todos.filter((todo) => todo.id !== removedId);
        setTodos(newTodos);
    };

    const toggleTodo = (toggledId: number): void => {
        const newTodos = todos.map((todo) => {
            const toggledTodo: Todo = { ...todo, isFinished: !todo.isFinished };
            return todo.id === toggledId ? toggledTodo : todo;
        });
        setTodos(newTodos);
    };
    return (
        <div className="container sm:w-1/2">
            <div className="  flex justify-between border-b-2 border-b-[#BDBDBD] text-center">
                {lists.map((list) => (
                    <p
                        className={`relative cursor-pointer px-4  pb-4 before:absolute before:bottom-[-2px] before:left-1/2  before:h-1 before:w-full before:translate-x-[-50%] before:rounded-[0.25rem_0.25rem_0rem_0rem] before:bg-[#2F80ED] hover:before:block
                        ${
                            activeList === list
                                ? "before:block"
                                : "before:hidden"
                        }
                    `}
                        onClick={() => setActiveList(list)}
                    >
                        {list.charAt(0).toUpperCase() + list.slice(1)}
                    </p>
                ))}
            </div>
            {activeList === "all" && (
                <NonCompletedList todos={todos} toggleTodo={toggleTodo} />
            )}
            {activeList === "active" && (
                <NonCompletedList
                    todos={todos.filter((t) => !t.isFinished)}
                    toggleTodo={toggleTodo}
                />
            )}
            {activeList === "completed" && <CompletedList />}
        </div>
    );
}
