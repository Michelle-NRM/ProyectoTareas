import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";


function App() {
  return (
    <div>
      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>v</span>
      <p>Tarea 1</p>
      <span>x</span>
    </li>
  );
}

export default App;
