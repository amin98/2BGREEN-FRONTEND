// MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col'>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
