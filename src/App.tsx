import { useState } from "react";

import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

export function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
}
