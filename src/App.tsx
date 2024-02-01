import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { ITodo } from "./models/ITodo";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="w-full justify-center">
        <div className="flex-col justify-center">
          <h1 className="text-3xl text-center">taskify</h1>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
