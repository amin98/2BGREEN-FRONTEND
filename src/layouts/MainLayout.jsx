import { Outlet } from 'react-router-dom';
import Navbar from '../components/misc/Navbar';
import { useState } from 'react';
import NavbarContext from '../components/contexts/NavbarContext';

const MainLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleNavbarHeightChange = height => {
    setNavbarHeight(height);
  };

  return (
    <NavbarContext.Provider value={navbarHeight}>
      <div className='min-h-screen flex flex-col'>
        <Navbar onHeightChange={handleNavbarHeightChange} />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default MainLayout;
