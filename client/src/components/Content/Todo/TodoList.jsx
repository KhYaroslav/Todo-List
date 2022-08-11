import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import Welcome from '../../Different/welcome/Welcome';
import './todo.css';

import { allTodo, allDeleteTodo } from '../../../Redux/actions/todoActions';
import Logout from '../../Different/logout/Logout';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(allTodo());
  }, []);

  const handleRemoveAll = () => {
    dispatch(allDeleteTodo());
  };

  return (
    <>
      <Logout />
      <Welcome />
      <TodoForm />
      <div className="divT">
        {todos?.map((el) => (
          <TodoItem
            key={el.id}
            todo={el}
          />
        ))}
        {todos.length > 1 && (
          <p>
            <button type="button" className="deleteAll" onClick={() => handleRemoveAll()}>
              <i className="tI fa-solid fa-eraser" />
              Удалить всё
            </button>
          </p>
        )}
      </div>
    </>
  );
}
