import React, { useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck } from './Redux/actions/userActions';
import Loading from './components/Different/loading/Loading';

import TodoList from './components/Content/Todo/TodoList';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCheck());
  }, []);

  return (
    <>
      {!user.loading ? (
        <Routes>
          <Route
            path="/"
            element={(
              <RequireAuth>
                <TodoList />
              </RequireAuth>
            )}
          />
        </Routes>
      ) : <Loading />}
    </>
  );
}

export default App;
