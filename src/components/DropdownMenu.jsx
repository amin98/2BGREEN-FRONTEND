import { Link } from 'react-router-dom';

const DropdownMenu = ({ dropdownState }) => {
  return (
    <ul
      className={`flex flex-col gap-2 ml-5 text-lg 
                  ${
                    dropdownState
                      ? 'visible max-h-[500px]'
                      : 'invisible max-h-0'
                  }
                  transition-all duration-200 ease-in-out overflow-hidden`}
      aria-expanded={dropdownState}
    >
      <li>
        <Link className='lg:hidden' to='/'>
          Laden
        </Link>
      </li>
      <li>
        <Link className='lg:hidden' to='/'>
          Groendaken
        </Link>
      </li>
      <li>
        <Link className='mb-4 lg:hidden' to='/'>
          Zonnepanelen
        </Link>
      </li>
    </ul>
  );
};

export default DropdownMenu;
