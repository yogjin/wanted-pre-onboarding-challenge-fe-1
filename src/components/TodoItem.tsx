import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Todo } from './TodoList';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, title: string, content: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDeleteTodo, onUpdateTodo }) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [content, setContent] = useState<string>(todo.content);
  const [수정가능, set수정가능] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [originalTitle, setOriginalTitle] = useState<string>('');
  const [originalContent, setOriginalContent] = useState<string>('');

  useEffect(() => {
    // 상세보기 중이었던 todo 기록 가져오기
    function setOpenedTodos() {
      const openedTodos = localStorage.getItem('openedTodos');
      setSearchParams({ openedTodos: `${openedTodos}` });
    }
    setOpenedTodos();
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

  function 수정_전_상태로_복구() {
    setTitle(originalTitle);
    setContent(originalContent);
  }

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    수정_전_상태로_복구();
    set수정가능(!수정가능);
  };

  function 수정_전_상태_저장() {
    setOriginalTitle(title);
    setOriginalContent(content);
  }

  const handleUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    if (수정가능) {
      // 저장 버튼 누를 때
      onUpdateTodo(todo.id, title, content);
    } else {
      // 수정 버튼 누를 때
      수정_전_상태_저장();
    }
    set수정가능(!수정가능);
  };

  function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.parentElement?.dataset.id!;
    onDeleteTodo(id);
  }

  function removeTodoFromOpenedTodos(todoId: string) {
    let openedTodos = searchParams
      .get('openedTodos')
      ?.replace(`%${todoId}`, '');
    setSearchParams({ openedTodos: `${openedTodos}` });
    localStorage.setItem('openedTodos', `${openedTodos}`);
  }

  function saveTodoInOpenedTodos(todoId: string) {
    let openedTodos = searchParams.get('openedTodos');
    setSearchParams({ openedTodos: `${openedTodos}%${todoId}` });
    localStorage.setItem('openedTodos', `${openedTodos}%${todoId}`);
  }

  function isOpened(todoId: string) {
    return searchParams.get('openedTodos')?.includes(todoId);
  }

  const handleDetail = () => {
    if (isOpened(todo.id)) {
      // 상세보기 중인 todo
      removeTodoFromOpenedTodos(todo.id);
    } else {
      saveTodoInOpenedTodos(todo.id);
    }
  };

  return (
    <li key={todo.id} data-id={todo.id}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
        disabled={!수정가능}
      />
      <input
        name="content"
        type="text"
        value={content}
        onChange={handleChange}
        disabled={!수정가능}
      />
      {수정가능 && <button onClick={handleCancel}>취소</button>}
      <button onClick={handleUpdate}>{수정가능 ? '저장' : '수정'}</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleDetail}>상세</button>
      <div>
        {isOpened(todo.id) && (
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
