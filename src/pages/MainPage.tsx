import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';
import TodoListHeader from '../components/TodoListHeader';
import { TodoServiceImpl } from '../service/todo';

interface MainPageProps {
  todoService: TodoServiceImpl;
}
export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
const MainPage: FC<MainPageProps> = ({ todoService }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    todoService.getTodos().then((response) => {
      setTodoList(response.data);
    });
  }, [todoService]);

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement?.dataset.id!;
    todoService.deleteTodo(id).then((response) => {
      setTodoList((todos) => todos.filter((todo) => todo.id !== id));
    });
  };

  function handleCreateTodo(title: string, content: string) {
    todoService.createTodo(title, content).then((response) => {
      setTodoList([...todoList, response.data]);
    });
  }

  return (
    <>
      <TodoListHeader onCreateTodo={handleCreateTodo} />
      <div className="lists">
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              todoService={todoService}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainPage;
