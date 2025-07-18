import React, { useState } from "react";
import { Todo } from "../App";
import { FaPen, FaTrash, FaSave, FaTimes } from "react-icons/fa";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleDelete = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirm) return;
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleEdit = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, isEditing: true } : t))
    );
  };

  const handleCancel = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, isEditing: false } : t))
    );
  };

  const handleSave = () => {
    if (editedText.trim() === "") return;
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: editedText, isEditing: false } : t
      )
    );
  };

  return (
    <div className="todo-item">
      {todo.isEditing ? (
        <>
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            placeholder="Edit your task"
          />
          <div className="button-group">
            <button className="save-btn" onClick={handleSave}>
              <FaSave />
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              <FaTimes />
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="button-group">
            <button
              className="edit-btn"
              onClick={handleEdit}
              title="Click to edit this task"
            >
              <FaPen />
            </button>
            <button
              className="delete-btn"
              onClick={handleDelete}
              title="Click to delete this task"
            >
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
