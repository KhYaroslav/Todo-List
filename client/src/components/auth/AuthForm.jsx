import './Registration.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp, userLogin } from '../../Redux/actions/userActions';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [reg, setReg] = useState({
    username: '', password: '', repeat: '', email: ''
  });
  const [log, setLog] = useState({ username: '', password: '' });

  const ChangeSignUp = (e) => setReg((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const ChangeLogin = (e) => setLog((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const SubmitSignUp = (e) => {
    e.preventDefault();
    if (reg.password !== '' && reg.username !== '' && reg.repeat === reg.password) {
      dispatch(userSignUp(reg));
    }
  };

  const SubmitLogin = (e) => {
    e.preventDefault();
    if (log.password !== '' && log.username !== '') {
      dispatch(userLogin(log));
    }
  };

  return (
    <div className="bodyReg">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={SubmitSignUp}>
            <label className="lReg" htmlFor="chk" aria-hidden="true">Регистрация</label>
            <input
              className="iReg"
              value={reg.username}
              onChange={ChangeSignUp}
              name="username"
              type="text"
              placeholder="Имя пользователя"
              required=""
            />
            <input
              className="iReg"
              value={reg.email}
              onChange={ChangeSignUp}
              name="email"
              type="email"
              placeholder="Почта"
              required=""
            />
            <input
              className="iReg"
              value={reg.password}
              onChange={ChangeSignUp}
              name="password"
              type="password"
              placeholder="Пароль"
              required=""
            />
            <input
              className="iReg"
              value={reg.repeat}
              onChange={ChangeSignUp}
              name="repeat"
              type="password"
              placeholder="Повторите пароль"
              required=""
            />
            <button className="bReg" type="submit">Готово</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={SubmitLogin}>
            <label className="lReg" htmlFor="chk" aria-hidden="true">Войти</label>
            <input
              className="iReg"
              value={log.username}
              onChange={ChangeLogin}
              name="username"
              type="text"
              placeholder="Имя пользователя"
              required=""
            />
            <input
              className="iReg"
              value={log.password}
              onChange={ChangeLogin}
              name="password"
              type="password"
              placeholder="Пароль"
              required=""
            />
            <button className="bReg" type="submit">Готово</button>
          </form>
        </div>
      </div>
    </div>
  );
}
