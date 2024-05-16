// MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/misc/Navbar';
import { useEffect, useState } from 'react';
const MainLayout = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col mt-[64px]'>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
