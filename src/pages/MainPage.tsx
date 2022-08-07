import { FC, useEffect, useState } from 'react';
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

  useEffect(() => {
    todoService.getTodos().then((value) => {
      setTodoList(value.data);
    });
  }, [todoService]);
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MainPage;
