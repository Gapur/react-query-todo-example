import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export interface Todo {
  id: string;
  text: string;
}

export async function fetchTodos(): Promise<Todo[]> {
  try {
    const todos = await axios.get("/todos");
    return todos.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export function createTodo(text: string) {
  return axios.post("/todos", { text });
}

export function deleteTodo(id: string) {
  return axios.delete(`/todos:${id}`);
}
