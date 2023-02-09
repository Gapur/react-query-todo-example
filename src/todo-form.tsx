type TodoFormProps = {
  todo: any;
  setTodo: (value: string) => void;
  addTodo: () => void;
}

export function TodoForm({ todo, setTodo, addTodo }: TodoFormProps) {
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
      <button className="add-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
