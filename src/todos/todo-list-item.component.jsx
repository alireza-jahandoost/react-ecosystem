import "./todo-list-item.styles.css";

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.txt}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark as Completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
