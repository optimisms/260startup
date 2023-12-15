import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { History } from './history/history';
import { NewForm } from './newform/newform';
import { Queue } from './queue/queue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark">
                        <a className="navbar-brand" href="#">PGSPCA</a>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="history.html">History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="newform.html">New Form</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="queue.html">Queue</a>
                            </li>
                        </menu>
                    </nav>
                </header>
        
                <main>App components go here</main>
        
                <footer class="bg-dark text-white-50">
                    <div class="container-fluid">
                        <span class="text-reset">Haile Terry</span>
                        <a class="text-reset" href="https://github.com/optimisms/startup" target="_blank">GitHub</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
  }