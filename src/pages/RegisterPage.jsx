import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 '>
      <div className='bg-white w-full md:w-3/5 lg:w-2/5 p-8 rounded-lg shadow-sm m-5'>
        {/* Form Header */}
        <h2 className='text-2xl font-medium mb-6 text-center'>Register</h2>

        {/* Form Fields */}
        <div className='mb-4 flex gap-5 last:'>
          <div className='w-full'>
            <label htmlFor='name' className='block text-gray-700 mb-2 '>
              Name:
            </label>
            <input
              autoComplete='off'
              type='text'
              id='name'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div>
          {/* <div className='w-full'>
            <label htmlFor='lastname' className='block text-gray-700 mb-2 '>
              Lastname:
            </label>
            <input
              autoComplete='off'
              type='text'
              id='lastname'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div> */}
        </div>
        <div className='mb-6'>
          {/* Adjust margin as needed */}
          <label htmlFor='email' className='block text-gray-700 mb-2 '>
            Email:
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
          />
        </div>
        <div className='mb-6'>
          {' '}
          {/* Adjust margin as needed */}
          <label htmlFor='password' className='block text-gray-700 mb-2 '>
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
          className='bg-light-green hover:bg-green text-white font-medium py-2 px-4 rounded-md w-full'
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
