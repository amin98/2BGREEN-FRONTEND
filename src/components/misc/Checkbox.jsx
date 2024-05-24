import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

function Checkbox({ product, onCheck }) {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
    onCheck(product, e.target.checked);
    console.log(product, checked);
  };
  return (
    <label className='relative flex items-center gap-2 p-2 transition-all bg-transparent rounded-md cursor-pointer group duration-50 hover:scale-105'>
      <input
        type='checkbox'
        className='w-6 h-6 transition-colors duration-100 bg-white border border-gray-300 rounded-md appearance-none group-hover:cursor-pointer checked:bg-secondary checked:border-transparent focus:outline-none'
        checked={checked}
        onChange={handleChange}
      />
      {checked && (
        <span className='absolute flex items-center justify-center transition-colors duration-100 bg-transparent left-3 text-primary'>
          <CheckIcon className='size-4' />
        </span>
      )}
      <span
        style={{ userSelect: 'none' }}
        className='font-normal transition-colors text-primary dark:text-green duration-50'
      >
        Vergelijken
      </span>
    </label>
  );
}

export default Checkbox;
