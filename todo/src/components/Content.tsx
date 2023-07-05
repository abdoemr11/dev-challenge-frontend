import { useEffect, useState } from "react";
import CompletedList from "./CompletedList";
import { ListType, Todo } from "../types";
import NonCompletedList from "./NonCompletedList";

function isValidTodos(data: unknown): data is Todo[] {
    return (
        Array.isArray(data) &&
        data.every(
            (item) =>
                typeof item.text === "string" &&
                typeof item.isFinished === "boolean" &&
                typeof item.id === "number"
        )
    );
}
export default function Content() {
    const [activeList, setActiveList] = useState<ListType>("all");
    const lists: ListType[] = ["all", "active", "completed"];

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const storedTodosStr = localStorage.getItem("todos");
        if (storedTodosStr) {
            try {
                const storedTodos = JSON.parse(storedTodosStr);
                if (isValidTodos(storedTodos)) {
                    setTodos(storedTodos);
                } else {
                    console.log("Invalid stored todos format.");
                }
            } catch (error) {
                console.log("Error parsing stored todos:", error);
            }
        }
    }, []);
    useEffect(() => {
        if (todos.length > 0)
            localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    const removeAllTodo = (): void => {
        setTodos(todos.filter((t) => !t.isFinished));
    };
    return (
        <div className="container sm:w-2/3">
            <div className="   flex justify-between border-b-2 border-b-[#BDBDBD]">
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
                <NonCompletedList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    addTodo={addTodo}
                />
            )}
            {activeList === "active" && (
                <NonCompletedList
                    todos={todos.filter((t) => !t.isFinished)}
                    toggleTodo={toggleTodo}
                    addTodo={addTodo}
                />
            )}
            {activeList === "completed" && (
                <CompletedList
                    todos={todos.filter((t) => t.isFinished)}
                    removeTodo={removeTodo}
                    removeAllTodo={removeAllTodo}
                />
            )}
        </div>
    );
}
