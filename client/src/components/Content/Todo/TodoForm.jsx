import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../Redux/actions/todoActions';

export default function TodoForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput({});
  };

  return (
    <form className="tForm formInput" onSubmit={submitHandler}>
      <label htmlFor="taskInput" />
      <input
        className="tInp"
        type="text"
        name="title"
        value={input.title || ''}
        onChange={inputHandler}
      />
      <button className="tBut btn-add" type="submit" alt="Add task"><i className="tI fa-solid fa-plus fa-3x" /></button>
    </form>
  );
}
