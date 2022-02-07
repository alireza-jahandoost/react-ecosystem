import { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import { addTodosRequest } from "./thunks";
import "./new-todo-form.styles.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
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
      <button
        onClick={() => {
          const isDuplicated = todos.some((todo) => todo.text === inputValue);
          if (!isDuplicated && inputValue !== "") {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodosRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
