import { useState, useEffect } from "react";

import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

import { fetchTodos, createTodo, Todo } from "./api";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  const getTodos = async () => {
    try {
      const todosData = await fetchTodos();
      setTodos(todosData);
      console.log("todo", todosData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async () => {
    try {
      await createTodo(todo);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = (text: string) => {};

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
}
