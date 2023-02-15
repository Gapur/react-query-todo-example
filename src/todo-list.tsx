import { Todo } from './api';

type TodoListProps = {
  list: Todo[] | undefined;
  remove: (id: any) => void;
}

export function TodoList({ list, remove }: TodoListProps) {
  console.log(list);
  return (
    <>
      {list && list.length > 0 ? (
        <ul className="todo-list">
          {list.map((todo) => (
            <div className="todo">
              <li key={todo.id}> {todo.text} </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};
