import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';

const MainLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
    </>
  );
};
export default MainLayout;
