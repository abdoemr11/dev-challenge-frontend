import { Todo } from "../types";
import TodoItem from "./TodoItem";

export default function CompletedList({
    removeTodo,
    removeAllTodo,
    todos,
}: {
    removeTodo: (id: number) => void;
    removeAllTodo: () => void;
    todos: Todo[];
}) {
    return (
        <>
            <div className="mt-5 space-y-6">
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex justify-between !text-[#BDBDBD]"
                    >
                        <TodoItem todo={todo} />
                        <span
                            className="material-icons-outlined cursor-pointer"
                            onClick={(id) => removeTodo(todo.id)}
                        >
                            delete
                        </span>
                    </div>
                ))}
            </div>
            <button
                className="ml-auto mt-11 flex items-center rounded bg-[#EB5757] px-6 py-3 text-xs font-semibold text-white"
                onClick={() => removeAllTodo()}
            >
                <span className="material-icons-outlined cursor-pointer ">
                    delete
                </span>
                delete all
            </button>
        </>
    );
}
