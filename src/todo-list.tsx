import { Todo } from "./api";

type TodoListProps = {
  list: Todo[] | undefined;
  remove: (id: string) => void;
};

export function TodoList({ list, remove }: TodoListProps) {
  console.log(list);
  return (
    <>
      {list && list.length > 0 ? (
        <ul className="todo-list">
          {list.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button
                className="delete-button"
                onClick={() => {
                  remove(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
}
