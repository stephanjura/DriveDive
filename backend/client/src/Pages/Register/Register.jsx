// Register.js

import React, { useState } from 'react';
import { axiosInstToSv } from '../../utils/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosInstToSv.post('/user', {
          name: username, email, password
        }).then(res => {
          window.location = '/register'
        }).catch(err => console.error(err))
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
