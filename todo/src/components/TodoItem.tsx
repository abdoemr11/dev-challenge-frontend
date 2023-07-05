import { Todo } from "../types";

interface TodoProps {
    todo: Todo;
    toggleTodo?: (id: number) => void;
}
function TodoItem({ todo, toggleTodo }: TodoProps) {
    function handleToggleTodo() {
        if (toggleTodo) toggleTodo(todo.id);
    }

    return (
        <div key={todo.id} className="flex items-center gap-2">
            <input
                className="h-6 w-6 cursor-pointer 
            rounded-sm border border-[#828282] accent-[#2F80ED]
            before:h-6 before:w-6 before:bg-red-900 before:text-white before:content-[s]
            checked:border-cblue checked:bg-cblue checked:before:block"
                type="checkbox"
                checked={todo.isFinished}
                id={todo.id.toString()}
                onChange={handleToggleTodo}
            />
            <p
                className={` text-lg font-medium ${
                    todo.isFinished ? "line-through" : ""
                }`}
            >
                {todo.text}
            </p>
        </div>
    );
}

export default TodoItem;
