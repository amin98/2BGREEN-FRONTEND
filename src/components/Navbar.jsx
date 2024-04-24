
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log('Menu state changed:', isMenuOpen); // Add this line

    if (isMenuOpen) {
      menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
      menuRef.current.classList.add('slide-in-left');
    } else {
      menuRef.current.style.maxHeight = null;
      menuRef.current.classList.remove('slide-in-left');
      menuRef.current.classList.add('slide-out-left');

      const handleTransitionEnd = () => {
        menuRef.current.classList.add('hidden');
        menuRef.current.removeEventListener(
          'transitionend',
          handleTransitionEnd
        );
      };
      menuRef.current.addEventListener('transitionend', handleTransitionEnd);
    }
  }, [isMenuOpen]);

  return (
    <nav className='bg-white shadow-md fixed top-0 w-full z-10'>
      <div className='container mx-auto px-4 flex justify-between items-center py-3'>
        <a href='/'>
          <img className='w-40' src='2b_green_logo.svg' alt='Image' />
        </a>
        <ul className='hidden md:flex gap-4'>
          <li>Laden</li>
          <li>Groendaken</li>
          <li>Zonnepanelen</li>
        </ul>

        {/* Hamburger Menu Button */}
        <button className='md:hidden' onClick={handleMenuClick}>
          M
        </button>

        {/* Collapsible Menu */}
        <div
          ref={menuRef}
          className={`md:hidden absolute top-full  w-full bg-white shadow-lg transition-all max-h-0 ${
            isMenuOpen ? '' : 'hidden'
          }`}
        >
          <ul className=' md:flex gap-4'>
            <li>Laden</li>
            <li>Groendaken</li>
            <li>Zonnepanelen</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
