import React from 'react';

import Button from 'react-bootstrap/Button';

export default function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName || '');
    const [password, setPassword] = React.useState('');

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }
    
    async function createUser() {
        loginOrCreate(`/api/auth/register`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({username: userName, password: password}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
        }
    }

    return (
        <div>
                <p>Login to view your records</p>
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input className="form-control" type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">🔒</span>
                    <input className="form-control" type="password" id="userPassword" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>

                <Button variant='primary' onClick={() => loginUser()}>Login</Button>
                <Button variant='secondary' onClick={() => createUser()}>Create</Button>
        </div>
    )
};