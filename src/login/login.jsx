import React from 'react';

import Unauthenticated from './unauthenticated';
import Authenticated from './authenticated';
import { AuthState } from './authState';

import "./login.css";

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome to the PGSPCA</h1>
      <div id="picture" className="picture-box"><img width="200px" src="../../public/dog.jpeg" alt="random" /></div>
      {authState === AuthState.Authenticated && (
        <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
      )}
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated
          userName={userName}
          onLogin={(loginUserName) => {
            onAuthChange(loginUserName, AuthState.Authenticated);
          }}
        />
      )}
    </main>
  );
}