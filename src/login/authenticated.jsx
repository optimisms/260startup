import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "authenticated.css";

export default function Authenticated() {
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
          method: 'delete',
        })
          .catch(() => {
            // Logout failed. Assuming offline
          })
          .finally(() => {
            localStorage.removeItem('userName');
            props.onLogout();
          });
      }

    return (
        <div>
            <h1>Authenticated goes here.</h1>
            <div id="playControls" style="display: block">
                <div id="userNameDisplay"></div>
                <Button variant='primary' onClick={() => navigate('/history')}>See Records</Button>
                <Button variant='secondary' onClick={() => logout()}>Logout</Button>
            </div>
        </div>
    )
};