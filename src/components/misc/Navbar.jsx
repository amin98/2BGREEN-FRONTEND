import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/onze-missie', label: 'Onze Missie' },
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
  ];

  return (
    <nav className='fixed z-50 top-0 w-full bg-white shadow'>
      <div className='justify-between px-2 sm:px-4 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink to='/'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='2b_green_logo.svg'
                  alt='2B Green'
                />
              </NavLink>
              <NavLink to='/'>
                <img
                  className='hidden lg:block h-8 w-auto'
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
                  className='group transition duration-300 text-primary hover:text-lime-green block px-3 py-2 rounded-md text-base font-medium'
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
                className='group transition duration-300 text-primary hover:text-lime-green block px-3 py-2 rounded-md text-base font-medium'
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
