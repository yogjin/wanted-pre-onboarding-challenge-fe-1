import React, { ChangeEvent, MouseEvent } from 'react';
import { FC } from 'react';
import { Todo } from '../pages/MainPage';

interface TodoItemProps {
  todo: Todo;
  handleClick: (e: MouseEvent<HTMLLIElement>) => void;
  handleUpdate: (e: ChangeEvent<HTMLButtonElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  handleClick,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <li key={todo.id} onClick={handleClick} data-id={todo.id}>
      <input
        name="title"
        type="text"
        value={todo.title}
        // onChange={handleUpdate}
        disabled={true}
      />
      <input
        name="content"
        type="text"
        value={todo.content}
        // onChange={handleUpdate}
        disabled={true}
      />
      {/* <button onClick={handleUpdate}>수정</button> */}
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
};

export default TodoItem;
