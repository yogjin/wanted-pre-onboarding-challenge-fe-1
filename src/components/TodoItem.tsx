import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { FC } from 'react';
import { Todo } from '../pages/MainPage';
import { TodoServiceImpl } from '../service/todo';

interface TodoItemProps {
  todo: Todo;
  handleClick: (e: MouseEvent<HTMLLIElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  todoService: TodoServiceImpl;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  handleClick,
  handleDelete,
  todoService,
}) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [content, setContent] = useState<string>(todo.content);
  const [addable, setAddable] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (target) {
      case 'title':
        return setTitle(value);
      case 'content':
        return setContent(value);
      default:
        return;
    }
  };

  const handleUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    if (addable) {
      todoService.updateTodo(todo.id, title, content).then(console.log);
    }
    setAddable(!addable);
  };

  return (
    <li key={todo.id} onClick={handleClick} data-id={todo.id}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        disabled={!addable}
      />
      <input
        name="content"
        type="text"
        value={content}
        onChange={handleChange}
        disabled={!addable}
      />
      <button onClick={handleUpdate}>{addable ? '저장' : '수정'}</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
};

export default TodoItem;
