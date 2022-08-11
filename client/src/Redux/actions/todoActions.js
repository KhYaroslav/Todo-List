import axios from 'axios';
import {
  ALL_TODO,
  ADD_TODO,
  DELETE_TODO,
  ALL_DELETE_TODO,
  CHANGE_TITLE_TODO,
  CHANGE_STATUS_TODO,
} from '../types';

export const allTodo = () => (dispatch) => {
  axios
    .get('/todo')
    .then((res) => dispatch({ type: ALL_TODO, payload: res.data }));
};

export const addTodo = (todo) => (dispatch) => {
  axios
    .post('/todo', todo)
    .then((res) => dispatch({ type: ADD_TODO, payload: res.data }));
};

export const deleteTodo = (id) => (dispatch) => {
  axios
    .delete(`/todo/${id}`)
    .then((res) => dispatch({ type: DELETE_TODO, payload: id }));
};

export const allDeleteTodo = () => (dispatch) => {
  axios
    .delete('/todo/deleteAll')
    .then(() => dispatch({ type: ALL_DELETE_TODO, payload: [] }));
};

export const changeTitleTodo = (id, title) => (dispatch) => {
  axios
    .put(`/todo/title/update/${id}`, { title })
    .then(() => dispatch({ type: CHANGE_TITLE_TODO, payload: { id, title } }));
};

export const changeStatusTodo = (id) => (dispatch) => {
  axios
    .put(`/todo/status/${id}`)
    .then(() => dispatch({ type: CHANGE_STATUS_TODO, payload: id }));
};
