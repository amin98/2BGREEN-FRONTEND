import { Outlet } from 'react-router-dom';
import Navbar from '../components/misc/Navbar';
import { useState, useEffect } from 'react';
import NavbarContext from '../components/contexts/NavbarContext';

const MainLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleNavbarHeightChange = height => {
    setNavbarHeight(height);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarHeight}px`
    );
  }, [navbarHeight]);

  return (
    <NavbarContext.Provider value={navbarHeight}>
      <div className='flex flex-col min-h-screen'>
        <Navbar onHeightChange={handleNavbarHeightChange} />
        <div className='flex-1 flex justify-center mt-[var(--navbar-height)]'>
          <Outlet />
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default MainLayout;
