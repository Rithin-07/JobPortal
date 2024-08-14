import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    // Clear any previous error
    setError('');

    try {
      // Attempt to log in
      const response = await axios.post('http://localhost:8080/api/login', formData);

      if (response.data) {
        // Successful login
        const loggedInStudent = response.data;
        localStorage.setItem('user', JSON.stringify({ email: email, role: 'student' }));
        localStorage.setItem('currentId', JSON.stringify(loggedInStudent)); // Store all user details
        localStorage.setItem('studentId', loggedInStudent.studentId); // Store only the student ID
        alert('Logged in successfully!');
        navigate('/profile');
      } else {
        // Login failed
        alert('No account exists with this email.');
        const createNewAccount = window.confirm('Are you a new user? Click OK to create a new account or Cancel to return.');
        if (createNewAccount) {
          navigate('/signup');
        }
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
      setError('An error occurred while checking credentials. Please try again.');
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type='submit' className="login-button"><center>Submit</center></button>
          <p className='login-login'>
            Don't have an account?
            <Link to='/signup'> <span> Click Here</span> </Link>  
          </p>
          <p className='login-login'>
            Admin?
            <Link to='/adminlog'> <span> Click Here</span> </Link>  
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
