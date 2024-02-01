import React, { useRef } from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="form_input justify-center mb-5"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.focus();
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          type="input"
          placeholder="Enter a task"
          className="input__box input input-bordered w-full max-w-xs focus:ring focus:ring-amber-300"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button className="input_submit btn" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;
