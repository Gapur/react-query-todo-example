import { useQuery, useMutation, useQueryClient } from "react-query";

import { NewTodo } from "./new-todo";
import { TodoList } from "./todo-list";

import { fetchTodos, deleteTodo } from "./api";

export function App() {
  const queryClient = useQueryClient();
  const { status, data, error } = useQuery('todos', fetchTodos);

  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  })
  
  console.log("🚀 ~ file: App.tsx:12 ~ App ~ data", data);

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>{`Error: ${error}`}</span>
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <NewTodo />
      <TodoList list={data} remove={(todoId: string) => mutate(todoId)} />
    </div>
  );
}
