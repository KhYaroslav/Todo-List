import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeTitleTodo, changeStatusTodo } from '../../../Redux/actions/todoActions';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [change, setСhange] = useState(todo.title);
  const [isEdit, setIsEdit] = useState(false);

  const removeHandle = (id) => {
    dispatch(deleteTodo(todo.id));
  };

  const handleComplete = (id) => {
    dispatch(changeStatusTodo(id));
  };

  const newValueHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(changeTitleTodo(todo.id, change));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="todo">
      <li className="tLi">
        <div className="checkAndTask">
          <label className="checkContainer">
            <input className="tInp" type="checkbox" onClick={() => handleComplete(todo.id)} />
            <span className="checkmark" />
          </label>
          <span>
            {isEdit ? (
              <div>
                <input className="editIpn tInp" type="text" onChange={(e) => setСhange(e.target.value)} value={change} />
              </div>
            ) : todo.title}
          </span>
        </div>
        <div className="bpos">
          <button className="tRemove" type="button" onClick={() => removeHandle(todo.id)}><i className="tI fa-solid fa-trash-can" /></button>
          {!isEdit
            ? (<button className="tEdit" type="button" onClick={() => setIsEdit((prev) => !prev)}><i className="tI fa-solid fa-pen-to-square" /></button>)
            : (
              <button
                className="tEdit"
                type="button"
                onClick={(e) => {
                  setIsEdit((prev) => !prev); newValueHandler(e);
                }}
              >
                <i className="fa-solid fa-check" />
              </button>
            )}
        </div>
      </li>
    </ul>
  );
}
