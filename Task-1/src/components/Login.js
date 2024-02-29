// Login.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/login', {
        usernameOrEmail: usernameOrEmail,
        password: password
      });

      console.log(response.data); // Log the response from the server

      alert('Login successful');
      setLoggedInUser(response.data.username); // Set the logged-in user
      // Reset form fields after successful login
      setUsernameOrEmail('');
      setPassword('');
      navigate('/art');
    } catch (error) {
      console.error('Error logging in:', error.message);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Failed to login. Please try again.');
      }
    }
  };
  useEffect(()=>{
    axios.post("http://127.0.0.1:3001/username",usernameOrEmail).then(()=>console.log("success username")).catch((err)=>console.log(err));
  })
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usernameOrEmail">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div className="register-link">
        <p>New user? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
