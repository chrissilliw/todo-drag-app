import React from "react";
import { ITodo } from "../models/ITodo";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="flex justify-center">
      <div className="todos">
        {" "}
        {todos.map((todo) => (
          //<li key={t.id}>{t.todo}</li>
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
