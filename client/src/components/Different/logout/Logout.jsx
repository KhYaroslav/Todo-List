import React from 'react';
import './Logout.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../Redux/actions/userActions';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <div className="divLogout">
      <Link onClick={logoutHandler} className="logout" to="/">
        <span className="spanLogout" />
        <span className="spanLogout" />
        <span className="spanLogout" />
        <span className="spanLogout" />
        Exit
      </Link>
    </div>
  );
}
