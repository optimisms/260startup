import React from 'react';
import Button from 'react-bootstrap/Button';

import "authenticated.css";

export default function Authenticated() {
    return (
        <div>
            <h1>Authenticated goes here.</h1>
            <div id="playControls" style="display: block">
                <div id="userNameDisplay"></div>
                <button type="button" className="btn btn-primary" onClick="seeRecords()">See Records</button>
                <button type="button" className="btn btn-secondary" onClick="logout()">Logout</button>

                <Button variant='primary' onClick={() => navigate('/play')}>See Records</Button>
                <Button variant='secondary' onClick={() => logout()}>Logout</Button>
            </div>
        </div>
    )
};