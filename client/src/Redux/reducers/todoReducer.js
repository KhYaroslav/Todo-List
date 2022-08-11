import {
  ALL_TODO,
  ADD_TODO,
  DELETE_TODO,
  ALL_DELETE_TODO,
  CHANGE_TITLE_TODO,
  CHANGE_STATUS_TODO,
} from '../types';

const todoReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_TODO:
      return payload;
    case ADD_TODO:
      return [payload, ...state];
    case DELETE_TODO:
      return state.filter((el) => el.id !== payload);
    case ALL_DELETE_TODO:
      return payload;
    case CHANGE_TITLE_TODO:
      return state.map((el) => {
        if (el.id === payload.id) {
          return { ...el, title: payload.title };
        }
        return el;
      });
    case CHANGE_STATUS_TODO:
      return state.map((el) => {
        if (el.id === payload) {
          return { ...el, status: !el.status };
        }
        return el;
      });
    default:
      return state;
  }
};

export default todoReducer;
