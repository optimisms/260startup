import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Authenticated(props) {
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
            <div className="userNameDisplay">{props.userName}</div>
            <Button variant='primary' onClick={() => navigate('/history')}>See Records</Button>
            <Button variant='secondary' onClick={() => logout()}>Logout</Button>
        </div>
    )
};