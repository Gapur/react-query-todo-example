import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import { createTodo } from "./api";

export function NewTodo() {
  const [todo, setTodo] = useState("");

  const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>{`An error has occurred: ${error}`}</span>;
  }

  const isInputEmpty = todo === '';

  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        className="add-button"
        disabled={isInputEmpty}
        onClick={() => mutate(todo)}
      >
        Add
      </button>
    </div>
  );
}
