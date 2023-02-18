import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import { createTodo } from "../api";

export function NewTodo() {
  const [todo, setTodo] = useState("");

  const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (status === "error") {
    return <div className="error">{`An error has occurred: ${error}`}</div>;
  }

  const isButtonDisabled = todo === '' || status === "loading";

  return (
    <div className="new-todo">
      <input
        type="text"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="add-btn"
        disabled={isButtonDisabled}
        onClick={() => mutate(todo)}
      >
        Add
      </button>
    </div>
  );
}
