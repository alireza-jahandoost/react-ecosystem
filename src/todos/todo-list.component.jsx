import { connect } from "react-redux";
import TodoListItem from "./todo-list-item.component";
import NewTodoForm from "./new-todo-form.component";
import "./todo-list.styles.css";

const TodoList = ({ todos = [] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem key={todo.text} todo={todo} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
