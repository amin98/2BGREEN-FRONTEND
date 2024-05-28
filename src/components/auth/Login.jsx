import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
    if (email && password) {
      onLogin(email, password);
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100'>
      <div className='w-5/12 p-8 bg-white rounded-md shadow-sm'>
        <h2 className='mb-6 text-2xl font-medium text-center'>Inloggen</h2>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-gray-700'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block mb-2 text-gray-700'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 font-medium text-white rounded-md bg-light-green hover:bg-green'
          >
            Login
          </button>
        </form>
        <div className='mt-4 text-center'>
          <a href='#' className='text-primary hover:text-lime-green'>
            Wachtwoord vergeten?
          </a>
          <p className='mt-2'>
            Nog geen account?
            <Link
              to='/register'
              className='ml-1 text-primary hover:text-lime-green'
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  ); 
};

export default Login;
