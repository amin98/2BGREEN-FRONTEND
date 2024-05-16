import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className='flex border bg-primary p-2 rounded-md items-center gap-2 relative group cursor-pointer transition-colors duration-100'>
      <input
        type='checkbox'
        className='group-hover:cursor-pointer appearance-none bg-white h-6 w-6 border border-gray-200 rounded-sm checked:bg-secondary checked:border-transparent focus:outline-none transition-colors duration-100'
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      {checked && (
        <span className='absolute left-3 flex items-center justify-center text-primary transition-colors duration-100'>
          <CheckIcon className='size-4' />
        </span>
      )}
      <span className='text-white dark:text-green font-normal transition-colors duration-100'>
        Vergelijken
      </span>
    </label>
  );
}

export default Checkbox;
