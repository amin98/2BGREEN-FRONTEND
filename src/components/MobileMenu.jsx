// NavLinksComponent.js
import { NavLink } from 'react-router-dom';

const NavLinksComponent = ({ setIsOpen }) => {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
  ];

  return (
    <div className='px-2 pt-2 pb-3 space-y-1 bg-white'>
      {navItems.map(item => (
        <NavLink
          key={item.to}
          onClick={() => setIsOpen(!isOpen)}
          to={item.to}
          className='group transition duration-300 text-primary hover:text-lime-green block px-3 py-2 rounded-md text-base font-medium'
        >
          {item.label}
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-green'></span>
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinksComponent;
