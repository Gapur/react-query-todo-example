import { useState } from "react";
import { useQuery } from "react-query";

import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

import { fetchTodos, createTodo, Todo } from "./api";

export function App() {
  const [todo, setTodo] = useState("");
  const { status, data, error } = useQuery('todos', fetchTodos);
  console.log("🚀 ~ file: App.tsx:12 ~ App ~ data", data);

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>{`Error: {error}`}</span>
  }

  const deleteTodo = (text: string) => {};

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoForm todo={todo} setTodo={setTodo} addTodo={() => {}} />
      <TodoList list={data} remove={deleteTodo} />
    </div>
  );
}
