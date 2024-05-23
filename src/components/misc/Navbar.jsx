import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ onHeightChange }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      onHeightChange(navRef.current.offsetHeight);
    }
  }, [onHeightChange]);

  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/onze-missie', label: 'Onze Missie' },
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
  ];

  return (
    <nav ref={navRef} className='fixed top-0 z-50 w-full bg-white shadow'>
      <div className='justify-between px-2 sm:px-4 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center bg-white sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
              ) : (
                <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
              )}
            </button>
          </div>
          <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
            <div className='flex items-center flex-shrink-0'>
              <NavLink to='/'>
                <img
                  className='block w-auto h-8 lg:hidden'
                  src='2b_green_logo.svg'
                  alt='2B Green'
                />
              </NavLink>
              <NavLink to='/'>
                <img
                  className='hidden w-auto h-8 lg:block'
                  src='2b_green_logo.svg'
                  alt='2B Green'
                />
              </NavLink>
            </div>
          </div>
          <div className='hidden sm:block sm:ml-6'>
            <div className='flex space-x-4'>
              {navItems.map(item => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className='block px-3 py-2 text-base font-medium transition duration-300 rounded-md group text-primary hover:text-lime-green'
                >
                  {item.label}
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-green'></span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`relative  w-full overflow-hidden transition-all duration-200 ease-in-out ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
          id='mobile-menu'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-white'>
            {navItems.map(item => (
              <NavLink
                key={item.href}
                onClick={() => setIsOpen(!isOpen)}
                to={item.href}
                className='block px-3 py-2 text-base font-medium transition duration-300 rounded-md group text-primary hover:text-lime-green'
              >
                {item.label}
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-green'></span>
              </NavLink>
            ))}
          </div>{' '}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
