import { useState } from "react";
import "./new-todo-form.styles.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your new todo here"
        className="new-todo-input"
        type="text"
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
