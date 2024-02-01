import React, { useEffect, useRef, useState } from "react";
import { ITodo } from "../models/ITodo";
import { MdDelete, MdDone, MdEdit } from "react-icons/md";

interface SingleTodoProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleUpdate = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      className="todo_container w-[400px] min-w-[200px] h-30 px-8 py-5 my-3 content-end flex justify-between bg-slate-50 rounded drop-shadow-xl"
      onSubmit={(e) => handleUpdate(e, todo.id)}
    >
      {edit && !todo.isDone ? (
        <input
          className="focus: outline-none focus:ring focus:ring-slate-400 rounded"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todo_tex">{todo.todo}</s>
      ) : (
        <span className="todo_text mt-1">{todo.todo}</span>
      )}

      {/* {todo.isDone ? (
        <s className="todo_tex">{todo.todo}</s>
      ) : (
        <span className="todo_tex">{todo.todo}</span>
      )} */}
      <div className="flex space-x-3">
        <div
          className="todo_icon w-fit h-fit bg-slate-200 hover:bg-blue-400 hover:scale-125 drop-shadow-lg transition duration-200 rounded-full p-2 cursor-pointer"
          onClick={() => {
            handleEdit();
          }}
        >
          <MdEdit />
        </div>
        <div
          className="todo_icon w-fit h-fit bg-slate-200 hover:bg-red-400 hover:scale-125 drop-shadow-lg transition duration-200 rounded-full p-2 cursor-pointer"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <MdDelete />
        </div>
        <div
          className="todo_icon w-fit h-fit bg-slate-200 hover:bg-green-400 hover:scale-125 drop-shadow-lg transition duration-200 rounded-full p-2 cursor-pointer"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
