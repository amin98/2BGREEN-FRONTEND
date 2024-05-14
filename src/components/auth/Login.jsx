import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 '>
      <div className='bg-white p-8 rounded-lg shadow-sm w-5/6 md:w-6/12 lg:w-5/12'>
        <h2 className='text-2xl font-medium mb-6 text-center'>Inloggen</h2>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 mb-2 '>
            Email:
          </label>
          <input
            type='email'
            id='email'
            onChange={event => setEmail(event.target.value)}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
          />
        </div>
        <div className='mb-6'>
          {' '}
          <label htmlFor='password' className='block text-gray-700 mb-2 '>
            Password:
          </label>
          <input
            type='password'
            id='password'
            onChange={event => setPassword(event.target.value)}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
          />
        </div>
        <button
          type='submit'
          className='bg-light-green hover:bg-green text-white font-medium py-2 px-4 rounded-md w-full'
          onClick={handleLogin}
        >
          Login
        </button>

        <div className='mt-4 text-center'>
          <a href='#' className='text-primary hover:text-lime-green'>
            Wachtwoord vergeten?
          </a>
          <p className='mt-2'>
            Nog geen account?
            <Link to='/register' className='text-primary hover:text-lime-green'>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
