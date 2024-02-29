import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    adminUsername: '',
    adminPassword: ''
  });
  const [error, setError] = useState('');

  const handleTabClick = (type) => {
    setUserType(type);
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loginData;
      if (userType === 'customer') {
        loginData = { username: formData.username, password: formData.password };
      } else if (userType === 'admin') {
        loginData = { username: formData.adminUsername, password: formData.adminPassword };
      }
  
      const response = await axios.post('http://localhost:3001/login', loginData);
      console.log(response?.data); // Optional chaining to prevent error
  
      if (response.status === 200) {
        if (userType === 'customer') {
          navigate('/home'); // Navigate to home page on successful login
        } else if (userType === 'admin') {
          navigate('/admin'); // Navigate to admin page on successful login
        }
      }
    } catch (error) {
      console.error('Error:', error.response?.data);
      setError(error.response?.data?.error || 'An error occurred');
    }
  };

  function submit(e) {
    e.preventDefault();
    let user = document.getElementById("admin-username").value;
    let pass = document.getElementById("admin-password").value;
    let user1 = "admin";
    let pass1 = "admin@123";
    console.log(user, pass, pass1, user1);
    if (user === user1 && pass === pass1) {
      console.log("success");
      navigate('/productform'); // Navigate to admin page on successful login
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="tabs">
        <button
          className={userType === 'customer' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabClick('customer')}
        >
          Customer
        </button>
        <button
          className={userType === 'admin' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabClick('admin')}
        >
          Admin
        </button>
      </div>
      {userType === 'customer' && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
      {userType === 'admin' && (
        <form>
          <div className="form-group">
            <label htmlFor="admin-username">Admin Username</label>
            <input
              type="text"
              id="admin-username"
              name="adminUsername"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Admin Password</label>
            <input
              type="password"
              id="admin-password"
              name="adminPassword"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" onClick={submit}>Login</button>
        </form>
      )}
      <p className="register-link">
        Don't have an account? <u><Link to="/register">Register here</Link></u>
      </p>
    </div>
  );
};

export default Login;
