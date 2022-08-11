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
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    props.todoService.getTodos().then((response) => {
      setTodoList(response.data);
    });
  }, [props.todoService]);

  const handleDeleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement?.dataset.id!;
    props.todoService.deleteTodo(id).then((response) => {
      setTodoList((todos) => todos.filter((todo) => todo.id !== id));
    });
  };

  function handleCreateTodo(title: string, content: string) {
    props.todoService.createTodo(title, content).then((response) => {
      setTodoList([...todoList, response.data]);
    });
  }

  return (
    <div className="todoList">
      <TodoListHeader onCreateTodo={handleCreateTodo} />
      <TodoItems
        todoList={todoList}
        onDeleteTodo={handleDeleteTodo}
        todoService={props.todoService}
      />
    </div>
  );
};

export default TodoList;
