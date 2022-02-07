import { connect } from "react-redux";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

const CompletedButton = styled(StyledButton)`
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled(StyledButton)`
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletePressed }) => {
  return (
    <TodoItemContainer>
      <h3>{todo.text}</h3>
      <ButtonsContainer>
        {!todo.isCompleted && (
          <CompletedButton
            onClick={() => {
              onMarkAsCompletePressed(todo.id);
            }}
          >
            Mark as Completed
          </CompletedButton>
        )}
        <RemoveButton
          onClick={() => {
            onRemovePressed(todo.id);
          }}
        >
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </TodoItemContainer>
  );
};

export default TodoListItem;
