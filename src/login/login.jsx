import React from 'react';

import Unauthenticated from './unauthenticated';
import Authenticated from './authenticated';
import "./login.css";
// import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <h1>Welcome to the PGSPCA</h1>
      <div id="picture" className="picture-box"><img width="200px" src="../../public/dog.jpeg" alt="random" /></div>
      <Authenticated />
      <Unauthenticated />
    </main>
  );
}