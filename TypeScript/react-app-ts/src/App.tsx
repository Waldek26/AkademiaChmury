import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [
  //   { id: "t1", text: "Finish the course" },
  //   { id: "t2", text: "Go to sleep" },
  // ];

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList items={todos} />
      </header>
    </div>
  );
}

export default App;
