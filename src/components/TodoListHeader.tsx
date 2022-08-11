import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { FC } from 'react';

interface Props {
  onCreateTodo: (title: string, content: string) => void;
}

const TodoListHeader: FC<Props> = (props) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

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

  function clearInputs() {
    setTitle('');
    setContent('');
  }
  async function handleAdd() {
    props.onCreateTodo(title, content);
    clearInputs();
  }

  return (
    <div className="todoListHeader">
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
  );
};

export default TodoListHeader;
