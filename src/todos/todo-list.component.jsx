import { connect } from "react-redux";
import { RemoveTodo, CompleteTodo } from "./actions";
import TodoListItem from "./todo-list-item.component";
import NewTodoForm from "./new-todo-form.component";
import "./todo-list.styles.css";

const TodoList = ({ todos = [], onMarkAsCompletePressed, onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        onMarkAsCompletePressed={onMarkAsCompletePressed}
        onRemovePressed={onRemovePressed}
        key={todo.text}
        todo={todo}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(RemoveTodo(text)),
  onMarkAsCompletePressed: (text) => dispatch(CompleteTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
