// Login.js

import React, { useState } from 'react';
import { axiosInstToSv } from '../../utils/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosInstToSv.post('/user/login', {
          email, password
        }).then(res => {
          console.log('====================================');
          console.log(res.data);
          console.log('====================================');
          window.localStorage.setItem('authtok', res.data)
          window.location = '/'
        }).catch(err => {
          console.error(err);
          alert('ERROR!')
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Mail:</label><br />
                <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                <button type="submit">Login</button>
            </form>
            <div>No account? <a href="/register">Register</a> </div>
        </div>
    );
};

export default Login;
