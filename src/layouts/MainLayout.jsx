import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { useState, useEffect } from 'react'; // Import useState and useEffect

const MainLayout = () => {
  const [contentHeight, setContentHeight] = useState('calc(100vh - 72px)'); // Initial height assuming 64px navbar

  useEffect(() => {
    const updateContentHeight = () => {
      const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height
      setContentHeight(`calc(100vh - ${navbarHeight}px)`);
    };

    updateContentHeight(); // Initial calculation

    window.addEventListener('resize', updateContentHeight); // Update on resize
    return () => {
      window.removeEventListener('resize', updateContentHeight); // Clean up
    };
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div
        className='snap-y snap-mandatory overflow-scroll scroll-smooth flex-grow'
        style={{ height: contentHeight }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
