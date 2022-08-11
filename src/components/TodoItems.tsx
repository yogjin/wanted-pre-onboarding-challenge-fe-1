import React, { MouseEvent } from 'react';
import { FC } from 'react';
import { TodoServiceImpl } from '../service/todo';
import TodoItem from './TodoItem';
import { Todo } from './TodoList';

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, title: string, content: string) => void;
  todoService: TodoServiceImpl;
}

const TodoItems: FC<Props> = (props: Props) => {
  return (
    <div className="todoItems">
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={props.onDeleteTodo}
            onUpdateTodo={props.onUpdateTodo}
            todoService={props.todoService}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
