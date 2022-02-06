import { connect } from "react-redux";
import { RemoveTodo } from "./actions";
import "./todo-list-item.styles.css";

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark as Completed</button>
        <button
          onClick={() => {
            onRemovePressed(todo.text);
          }}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(RemoveTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
