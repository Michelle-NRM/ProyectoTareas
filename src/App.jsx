import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./index.css";

const defaultTodos = [
  { Text: "Tarea 1", completed: true },
  { Text: "Tarea 2", completed: false },
  { Text: "Tarea 3", completed: false },
  { Text: "Tarea 4", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.Text}
            text={todo.Text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
