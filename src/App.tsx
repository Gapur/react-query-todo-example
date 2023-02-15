import { useQuery, useMutation, useQueryClient } from "react-query";

import { NewTodo } from "./components/new-todo";
import { TodosList } from "./components/todos-list";

import { fetchTodos, deleteTodo } from "./api";

export function App() {
  const queryClient = useQueryClient();
  const { status, data, error } = useQuery("todos", fetchTodos);

  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>{`Error: ${error}`}</span>;
  }

  return (
    <div className="app">
      <h1>React Query Todo Example</h1>

      <NewTodo />

      <TodosList todos={data} onDelete={(todoId: string) => mutate(todoId)} />
    </div>
  );
}
