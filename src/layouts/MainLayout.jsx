import { Outlet } from 'react-router-dom';
import Navbar from '../components/misc/Navbar';
import { useState, useEffect } from 'react';
import NavbarContext from '../components/contexts/NavbarContext';
import { ArrowUpIcon } from '@heroicons/react/24/outline'; // Import an icon for the button from heroicons

const MainLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleNavbarHeightChange = height => {
    setNavbarHeight(height);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarHeight}px`
    );
  }, [navbarHeight]);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavbarContext.Provider value={navbarHeight}>
      <div className='flex flex-col min-h-screen'>
        <Navbar onHeightChange={handleNavbarHeightChange} />
        <div className='flex-1 flex justify-center mt-[var(--navbar-height)]'>
          <Outlet />
        </div>
        <div
          className={`fixed bottom-10 right-4 flex justify-center items-center  size-12 rounded-full shadow-lg bg-[url('./assets/icons/icon.png')] bg-cover bg-center transition-opacity duration-200 hover:cursor-pointer ease-in-out ${
            showScrollToTop ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={scrollToTop}
          aria-label='Scroll to top'
        >
          <ArrowUpIcon className=' size-7' strokeWidth={2} stroke='white' />
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default MainLayout;
