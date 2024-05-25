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
    <header className='fixed z-50 flex flex-wrap w-full h-16 py-3 text-sm bg-white sm:justify-start sm:flex-nowrap sm:py-0'>
      <nav
        ref={navRef}
        className='relative max-w-[94rem] w-full mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 '
        aria-label='Global'
      >
        <div className='flex items-center justify-between w-full px-2 sm:w-auto'>
          <NavLink
            to='/'
            className='flex-none text-xl font-semibold text-primary'
            aria-label='Brand'
          >
            <img
              className='block w-auto h-8 lg:hidden'
              src='2b_green_logo.svg'
              alt='2B Green'
            />
            <img
              className='hidden w-auto h-10 lg:block'
              src='2b_green_logo.svg'
              alt='2B Green'
            />
          </NavLink>
          <div className='sm:hidden'>
            <button
              type='button'
              className='flex items-center justify-center text-sm font-semibold border rounded-lg text-primary hs-collapse-toggle size-9 gap-x-2 border-white/20 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className='block size-7' aria-hidden='true' />
              ) : (
                <Bars3Icon className='block size-7' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className={`hs-collapse overflow-hidden transition-all duration-300 sm:flex sm:items-center sm:justify-between sm:h-4 ${
            isOpen ? 'max-h-screen' : 'max-h-4'
          }`}
        >
          <div className='flex flex-col p-4 text-base bg-white px-text-base sm:flex-row sm:items-center sm:justify-end md:py-0 '>
            {navItems.map(item => (
              <NavLink
                key={item.href}
                to={item.href}
                className='py-3 font-medium transition-all duration-500 ps-px sm:px-3 text-primary hover:text-secondary'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className='flex items-center py-2 font-medium gap-x-2 text-primary hover:text-secondary sm:border-s sm:border-secondary md:py-0 sm:my-6 sm:ps-6'
              href='#'
            >
              <svg
                className='flex-shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
