import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  text: string;
  isEditing: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
