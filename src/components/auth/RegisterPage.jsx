import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 '>
      <div className='w-5/12 p-8 m-5 bg-white rounded-md shadow-sm '>
        <h2 className='mb-6 text-2xl font-medium text-center'>Register</h2>

        <div className='flex gap-5 mb-4 last:'>
          <div className='w-full'>
            <label htmlFor='name' className='block mb-2 text-gray-700 '>
              Name:
            </label>
            <input
              autoComplete='off'
              type='text'
              id='name'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div>
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block mb-2 text-gray-700 '>
            Email:
          </label>
          <input
            type='email'
            id='email'
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
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
          />
        </div>

        <button
          type='submit'
          className='w-full px-4 py-2 font-medium text-white rounded-md bg-light-green hover:bg-green'
        >
          Register
        </button>

        <div className='mt-4 text-center'>
          <p className='flex justify-center gap-2 mt-2'>
            Already have an account?
            <Link to='/login' className='text-primary hover:text-lime-green'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
