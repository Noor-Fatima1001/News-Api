import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('https://backend-to-do-list-mu.vercel.app/api/auth/signup', form );
      setMessage('Sign up successful! You can now.');
      navigate("/login")
    } catch (err) {
      setMessage(err.response?.data?.message || 'Sign up failed.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-3">Sign Up</h3>
            <p className='text-center text-secondary mb-5'>Create your account to get full access</p>
            {message && <div className="alert alert-info alert-danger ">{message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder='FirstName'
                  className="form-control"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder='Lastname'
                  className="form-control"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder='Enter Email'
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
                  name="password"
                  placeholder='Enter password'
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div> 
          <div className='d-flex justify-content-between'>
          <p className="mt-3 text-center">
              Already have an account? <Link to="/login">Log in</Link> here
            </p>
           <i><button type="submit" className="btn btn-danger w-25%">Sign Up</button></i>
            </div>
            </form> 
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
