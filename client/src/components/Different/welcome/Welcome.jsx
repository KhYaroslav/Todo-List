import React from 'react';
import './welcome.css';
import { useSelector } from 'react-redux';

export default function Welcome() {
  const user = useSelector((state) => state.user);

  return (
    <div className="postition">
      <div className="divWelcome">
        <h1 className="h1Welcome">
          {`Welcome ${user?.username}`}
        </h1>
      </div>
    </div>
  );
}
