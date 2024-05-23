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
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 '>
      <div className='w-5/12 p-8 bg-white rounded-md shadow-sm '>
        <h2 className='mb-6 text-2xl font-medium text-center'>Inloggen</h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2 text-gray-700 '>
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
          <label htmlFor='password' className='block mb-2 text-gray-700 '>
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
          className='w-full px-4 py-2 font-medium text-white rounded-md bg-light-green hover:bg-green'
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
}

export default Login;
