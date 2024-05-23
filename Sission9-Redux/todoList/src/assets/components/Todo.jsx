import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducer/todosSlice ';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      {/* truy cập vào thuộc tính text  */}
      <span>{todo.text}</span>   
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
