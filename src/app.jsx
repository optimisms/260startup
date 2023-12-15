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
                                <NavLink className='nav-link' to=''>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='history'>History</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='newform'>New Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='queue'>Queue</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
        
                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/history' element={<History />} />
                    <Route path='/newform' element={<NewForm />} />
                    <Route path='/queue' element={<Queue />} />
                </Routes>
        
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