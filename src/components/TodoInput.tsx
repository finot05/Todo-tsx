import React, { useState } from "react";
import { Todo } from "../App";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoInput: React.FC<Props> = ({ todos, setTodos }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button id="addbtn" onClick={handleAdd} title="Click to add a new task">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
