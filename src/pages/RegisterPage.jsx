const RegisterPage = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-sm '>
        {/* Form Header */}
        <h2 className='text-2xl font-medium mb-6 text-center'>Registreren</h2>

        {/* Form Fields */}
        <div className='mb-4 flex gap-5'>
          <div>
            <label htmlFor='email' className='block text-gray-700 mb-2 '>
              Voornaam:
            </label>
            <input
              autoComplete='off'
              type='email'
              id='email'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700 mb-2 '>
              Achternaam:
            </label>
            <input
              autoComplete='off'
              type='email'
              id='email'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
            />
          </div>
        </div>
        <div className='mb-6'>
          {' '}
          {/* Adjust margin as needed */}
          <label htmlFor='password' className='block text-gray-700 mb-2 '>
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
            Wachtwoord:
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary'
          />
        </div>
        <div className='mb-6'>
          {' '}
          {/* Adjust margin as needed */}
          <label htmlFor='password' className='block text-gray-700 mb-2 '>
            Bevestig Wachtwoord:
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
          Registreren
        </button>

        <div className='mt-4 text-center'>
          <a href='#' className='text-primary hover:text-lime-green'>
            Wachtwoord vergeten?
          </a>
          <p className='mt-2'>
            Nog geen account?{' '}
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
