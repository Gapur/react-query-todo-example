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

export async function createTodo(text: string) {
  try {
    await axios.post("/todos", { text });
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function deleteTodo(id: string) {
  try {
    await axios.delete(`/todos/${id}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
}
