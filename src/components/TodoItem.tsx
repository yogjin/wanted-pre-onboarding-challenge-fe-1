import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Todo } from '../pages/MainPage';
import { TodoServiceImpl } from '../service/todo';

interface TodoItemProps {
  todo: Todo;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  todoService: TodoServiceImpl;
}

const TodoItem: FC<TodoItemProps> = ({ todo, handleDelete, todoService }) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [content, setContent] = useState<string>(todo.content);
  const [addable, setAddable] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = localStorage.getItem('id');
    setSearchParams({ id: `${params}` });
  }, [setSearchParams]);

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
      todoService.updateTodo(todo.id, title, content);
    }
    setAddable(!addable);
  };

  const handleDetail = (e: MouseEvent<HTMLButtonElement>) => {
    let params = searchParams.get('id');

    if (params?.includes(todo.id)) {
      params = params.replace(`%${todo.id}`, '');
      setSearchParams({ id: `${params}` });
      localStorage.setItem('id', `${params}`);
    } else {
      setSearchParams({ id: `${params}%${todo.id}` });
      localStorage.setItem('id', `${params}%${todo.id}`);
    }
  };

  return (
    <li key={todo.id} data-id={todo.id}>
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
      <button onClick={handleDetail}>상세</button>
      <div>
        {searchParams.get('id')?.includes(todo.id) && (
          <>
            <div>생성 날짜: {todo.createdAt}</div>
            <div>제목: {title}</div>
            <div>내용: {content}</div>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
