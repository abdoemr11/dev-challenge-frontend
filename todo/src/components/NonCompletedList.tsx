import { Todo } from "../types";

export default function NonCompletedList({
    todos,
    toggleTodo,
}: {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}) {
    return (
        <div>
            //input field
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.isFinished}
                        id={todo.id.toString()}
                        onChange={(e) => {
                            toggleTodo(todo.id);
                        }}
                    />
                    <p>{todo.text}</p>
                </div>
            ))}
        </div>
    );
}
