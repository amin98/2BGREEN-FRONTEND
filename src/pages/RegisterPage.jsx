const RegisterPage = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-sm '>
        {/* Form Header */}
        <h2 className='text-2xl font-medium mb-6 text-center'>Register</h2>

        {/* Form Fields */}
        <div className='mb-4 flex gap-5'>
          <div>
            <label htmlFor='firstname' className='block text-gray-700 mb-2 '>
              Firstname:
            </label>
            <input
              autoComplete='off'
              type='text'
              id='firstname'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div>
          <div>
            <label htmlFor='lastname' className='block text-gray-700 mb-2 '>
              Lastname:
            </label>
            <input
              autoComplete='off'
              type='text'
              id='lastname'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div>
        </div>
        <div className='mb-6'>
          {' '}
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
          <a href='#' className='text-primary hover:text-lime-green'>
            Forgot password?
          </a>
          <p className='mt-2'>
            No account yet?{' '}
            <a href='#' className='text-primary hover:text-lime-green'>
              Registreren
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
