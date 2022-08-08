import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import { TodoServiceImpl } from '../service/todo';

interface MainPageProps {
  todoService: TodoServiceImpl;
}
interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
const MainPage: FC<MainPageProps> = ({ todoService }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [selected, setSelected] = useState<Todo>();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    todoService.getTodos().then((response) => {
      setTodoList(response.data);
    });
  }, [todoService]);

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

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    todoService.createTodo(title, content).then((response) => {
      setTodoList([...todoList, response.data]);
      setTitle('');
      setContent('');
    });
  };

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement?.dataset.id!;
    todoService.deleteTodo(id).then((response) => {
      setTodoList((todos) => todos.filter((todo) => todo.id !== id));
    });
  };

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.dataset.id;
    const clicked = todoList.find((todo) => todo.id === id);
    setSelected(clicked);
  };

  return (
    <>
      <div className="add">
        <input
          name="title"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="제목"
        />
        <input
          name="content"
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="내용"
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <div className="lists">
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id} onClick={handleClick} data-id={todo.id}>
              <input
                name="title"
                type="text"
                value={todo.title}
                onChange={handleUpdate}
              />
              <input
                name="content"
                type="text"
                value={todo.content}
                onChange={handleUpdate}
              />
              <button onClick={handleDelete}>수정</button>
              <button onClick={handleDelete}>삭제</button>
            </li>
          ))}
        </ul>
        {selected && (
          <>
            <div>생성 날짜: {selected.createdAt}</div>
            <div>제목: {selected.title}</div>
            <div>내용: {selected.content}</div>
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;
