import { connect } from "react-redux";
import { RemoveTodo, CompleteTodo } from "./actions";
import "./todo-list-item.styles.css";

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {!todo.isCompleted && (
          <button
            className="completed-button"
            onClick={() => {
              onMarkAsCompletePressed(todo.text);
            }}
          >
            Mark as Completed
          </button>
        )}
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
  onMarkAsCompletePressed: (text) => dispatch(CompleteTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
