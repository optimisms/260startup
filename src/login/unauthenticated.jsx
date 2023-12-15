import React from 'react';

export default function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

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
                {/* <button type="button" className="btn btn-primary" onClick="login()">Login</button> */}
                {/* <button type="button" className="btn btn-primary" onClick="register()">Create</button> */}
            
        </div>
    )
};