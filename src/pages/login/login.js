import React, { useState } from 'react';
import './login.css';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { useAuth } from '../../contexts/authContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State to store error messages

  const { setCurrentUser } = useAuth();  // Assuming `setCurrentUser` is available from your context to set the user

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear any existing errors
    try {
      const user = await doSignInWithEmailAndPassword(email, password);
      setCurrentUser(user);  // Set the user in your AuthContext
    } catch (error) {
      setError(error.message);  // Display error message from Firebase on authentication failure
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}  // Display error message
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="submit-button">
          <button type="submit" className="button">Login</button>
        </div>
        <p className="register-link">
          Don't have an account? <a href="/register">Register now</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
