import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('https://backend-to-do-list-mu.vercel.app/api/auth/login', form);
      localStorage.setItem('authToken', res.data.token);
      setMessage('Login successful!');
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow-sm"> 
            <h3 className="text-center mb-2">Log in</h3>
            <p className='text-secondary text-center mb-4'>Enter login details to get access</p>

            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Username or Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Username / Email Address"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='d-flex justify-content-between mb-5'>
              <div className="mb-3 form-check d-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="keepLoggedIn"
                />
                <label className="form-check-label" htmlFor="keepLoggedIn">
                  Keep me logged in
                </label>
              </div>

              <p className="text-danger" style={{ cursor: 'pointer' }}>Forgot Password?</p></div>
              <div className='d-flex justify-content-between'>
            <p className="mt-4 text-secondary">
              Don’t have an account? <Link to="/signup">Sign Up</Link> here
            </p>
            <button type="submit" className=" mt-3 btn btn-danger w-25 h-25">
                Log in
              </button>
              </div>
            
              
            </form>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
