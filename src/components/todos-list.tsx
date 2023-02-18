import { Todo } from "../api";

type TodosListProps = {
  todos: Todo[] | undefined;
  onDelete: (id: string) => void;
};

export function TodosList({ todos, onDelete }: TodosListProps) {
  if (todos && todos.length > 0) {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  return (
    <div className="empty">
      <p>No found</p>
    </div>
  );
}
