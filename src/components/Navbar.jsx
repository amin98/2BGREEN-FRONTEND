import { useState } from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuState);
    console.log();
  };

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='flex flex-col'>
        <nav className='fixed p-2 w-full flex justify-between items-center border bg-white z-10 shadow-md'>
          <div className='flex gap-3 lg:hidden'>
            <img
              onClick={handleMenuClick}
              className='w-8 hover:cursor-pointer hover:bg-gray-100 rounded-md '
              src={menuState ? 'close.svg' : 'menu.svg'}
              alt='Menu'
            />
          </div>
          <Link onClick={handleMenuClick} to='/'>
            <img className='w-40' src='2b_green_logo.svg' alt='Image' />
          </Link>
          <div className='flex gap-3'>
            {/* <a href=''>
              <img className='w-6' src='search.svg' alt='Search' />
            </a> */}
            <a className='hidden lg:flex' href='#'>
              Laden
            </a>
            <a className='hidden lg:flex' href='#'>
              Groendaken
            </a>
            <a className='hidden lg:flex' href='#'>
              Zonnepanelen
            </a>
            <a href=''>
              <img
                className='w-8'
                src='shopping-cart.svg'
                alt='Shopping Cart'
              />
            </a>
            {/* <a href=''>
              <img className='w-6' src='account.png' alt='Account' />
            </a> */}
          </div>
        </nav>
        <div
          className={`fixed top-12 overflow-scroll  w-full transition-all -translate-y-100 ease-in-out duration-200 bg-white h-screen
                    ${menuState ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className=' flex flex-col items-start m-5 text-[25px]'>
            <div
              className='relative flex flex-col items-start mt-2 gap-2'
              role='button'
              aria-expanded={dropdownState}
            >
              <div
                className={`flex justify-center items-center gap-2 transition-all  ease-in-out duration-100 ${
                  dropdownState ? 'gap-4 ' : 'gap-2'
                }`}
                onClick={handleDropdownClick}
              >
                <Link className='lg:hidden' to='/'>
                  Producten
                </Link>
                <img
                  className={`${
                    dropdownState
                      ? 'rotate-90 transition-all ease-in-out duration-200'
                      : 'rotate-0 transition-all ease-in-out duration-200'
                  } size-[1rem]`}
                  src='arrow-right.svg'
                  alt='Arrow Right'
                />
              </div>

              <DropdownMenu dropdownState={dropdownState} />
              <div className='flex flex-col gap-4 '>
                <li className='flex justify-between items-center'>
                  <Link onClick={handleMenuClick} className=' lg:hidden' to='/'>
                    Onze Missie
                  </Link>
                </li>
                <li className='flex justify-between items-center'>
                  <Link onClick={handleMenuClick} className=' lg:hidden' to='/'>
                    Blog
                  </Link>
                </li>
                <li className='flex justify-between items-center'>
                  <Link onClick={handleMenuClick} className=' lg:hidden' to='/'>
                    Dashboard
                  </Link>
                </li>
                <li className='flex justify-between items-center'>
                  <Link
                    onClick={handleMenuClick}
                    className=' lg:hidden'
                    to='/register'
                  >
                    Registreren
                  </Link>
                </li>
                <li className='flex justify-between items-center'>
                  <Link
                    onClick={handleMenuClick}
                    className=' lg:hidden'
                    to='/login'
                  >
                    Login
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
