import { useEffect } from "react";
import { connect } from "react-redux";
import { RemoveTodo, CompleteTodo } from "./actions";
import { loadTodos } from "./thunks";
import TodoListItem from "./todo-list-item.component";
import NewTodoForm from "./new-todo-form.component";
import "./todo-list.styles.css";

const TodoList = ({
  todos = [],
  onMarkAsCompletePressed,
  onRemovePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <>
      {todos.map((todo) => (
        <TodoListItem
          onMarkAsCompletePressed={onMarkAsCompletePressed}
          onRemovePressed={onRemovePressed}
          key={todo.text}
          todo={todo}
        />
      ))}
    </>
  );

  const wrapper = (ui) => (
    <div className="list-wrapper">
      <NewTodoForm />
      {ui}
    </div>
  );

  return wrapper(isLoading ? loadingMessage : content);
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(RemoveTodo(text)),
  onMarkAsCompletePressed: (text) => dispatch(CompleteTodo(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
