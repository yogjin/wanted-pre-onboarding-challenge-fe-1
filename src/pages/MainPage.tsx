import { FC } from 'react';
import TodoList from '../components/TodoList';

import TodoListHeader from '../components/TodoListHeader';
import { TodoServiceImpl } from '../service/todo';

interface MainPageProps {
  todoService: TodoServiceImpl;
}
const MainPage: FC<MainPageProps> = ({ todoService }) => {
  return (
    <>
      <TodoList todoService={todoService} />
    </>
  );
};

export default MainPage;
