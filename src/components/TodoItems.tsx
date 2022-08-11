import React, { MouseEvent } from 'react';
import { FC } from 'react';
import { TodoServiceImpl } from '../service/todo';
import TodoItem from './TodoItem';
import { Todo } from './TodoList';

interface Props {
  todoList: Todo[];
  onDeleteTodo: (e: MouseEvent<HTMLButtonElement>) => void;
  todoService: TodoServiceImpl;
}

const TodoItems: FC<Props> = (props: Props) => {
  return (
    <div className="todoItems">
      <ul>
        {props.todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={props.onDeleteTodo}
            todoService={props.todoService}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
