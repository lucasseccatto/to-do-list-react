import { styled } from "styled-components";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #c196fa 0%, #a576e3 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 1.85rem 1.25rem;
  border-radius: 0.313rem;

  ul {
    padding: 0;
    margin-top: 3.75rem;
  }
`;

export const InputTask = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 0.313rem;
  height: 2.5rem;
  margin-right: 2.5rem;
  font-size: 1rem;
  width: 21.25rem;
`;

export const ButtonTask = styled.button`
  background: #8052ec;
  border-radius: 0.313rem;
  font-weight: 900;
  font-size: 1rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  color: #ffffff;
  width: 8.125rem;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#e8ff88" : "#e4e4e4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.313rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  padding: 0 0.625rem;
  font-size: 1rem;
  width: 31.25rem;

  li {
    list-style: none;
  }
`;

export const CheckIcon = styled(FcCheckmark)`
  cursor: pointer;
`;

export const TrashIcon = styled(FcEmptyTrash)`
  cursor: pointer;
`;

export const EmptyList = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
`;
