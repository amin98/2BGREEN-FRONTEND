import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

function FilterCheckbox({ label }) {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
  };
  return (
    <label className='flex rounded-md items-center gap-2 relative group cursor-pointer '>
      <input
        type='checkbox'
        className='group-hover:cursor-pointer appearance-none bg-white size-5 border border-gray-200 rounded-md checked:bg-secondary checked:border-transparent focus:outline-none transition-colors duration-100'
        checked={checked}
        onChange={handleChange}
      />
      {checked && (
        <span className='absolute left-1 flex items-center justify-center text-primary transition-colors duration-100'>
          <CheckIcon className='size-3' />
        </span>
      )}
      <span className='text-primary dark:text-green font-normal transition-colors duration-50'>
        {label}
      </span>
    </label>
  );
}

export default FilterCheckbox;
