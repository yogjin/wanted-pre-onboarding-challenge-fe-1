import React, { MouseEvent, useEffect, useState } from 'react';
import { FC } from 'react';
import { TodoServiceImpl } from '../service/todo';
import TodoItem from './TodoItem';
import TodoItems from './TodoItems';
import TodoListHeader from './TodoListHeader';

interface Props {
  todoService: TodoServiceImpl;
}

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList: FC<Props> = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    props.todoService.getTodos().then((response) => {
      setTodos(response.data);
    });
  }, [props.todoService]);

  const handleDeleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement?.dataset.id!;
    props.todoService.deleteTodo(id).then((response) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    });
  };

  function handleCreateTodo(title: string, content: string) {
    props.todoService.createTodo(title, content).then((response) => {
      setTodos([...todos, response.data]);
    });
  }

  return (
    <div className="todoList">
      <TodoListHeader onCreateTodo={handleCreateTodo} />
      <TodoItems
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        todoService={props.todoService}
      />
    </div>
  );
};

export default TodoList;
