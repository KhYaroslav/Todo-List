import { ADD_USER } from '../types';

const userReducer = (state = { loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
