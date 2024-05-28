import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const SelectedItemsPopup = ({
  selectedItems,
  removeItem,
  navigateToComparison,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (selectedItems.length === 0) {
      setIsExpanded(false);
    }
  }, [selectedItems]);

  return (
    <div
      className={`fixed bottom-0 z-10 p-4 bg-white border rounded-t-lg shadow-lg right-10 border-secondary w-72 transition-all duration-300 ${
        isExpanded ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        transform: isExpanded
          ? 'translateY(0)'
          : 'translateY(calc(100% - 50px))',
      }}
    >
      <div className='flex items-center justify-between '>
        <button
          onClick={toggleExpand}
          className='flex items-center justify-between w-full'
        >
          <div className='flex'>
            <span className='font-bold text-primary'>Vergelijk</span>
            <span className='flex items-center justify-center w-6 h-6 ml-2 text-white rounded-full compare-items bg-primary'>
              {selectedItems.length}
            </span>
          </div>

          {isExpanded ? (
            <ChevronUpIcon className='w-5 h-5 ml-2' />
          ) : (
            <ChevronDownIcon className='w-5 h-5 ml-2' />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className='mt-4'>
          <ul className='flex flex-col gap-5'>
            {selectedItems.map(item => (
              <li
                key={item.id}
                className='flex items-center justify-between mb-2'
              >
                <Link
                  to={`/product/${item.category}/${item.id}`}
                  className='flex items-center'
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-12 h-12 mr-2 rounded'
                  />
                  <div className='flex flex-col w-[175px]'>
                    <h3 className='text-sm font-bold truncate text-primary'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-700'>€{item.price}</p>
                  </div>
                </Link>
                <button onClick={() => removeItem(item.id)}>
                  <XCircleIcon className='w-5 h-5 text-red-500' />
                </button>
              </li>
            ))}
          </ul>
          <div className='text-center'>
            <button
              onClick={navigateToComparison}
              className='w-full py-2 font-bold text-white rounded-lg bg-primary hover:text-primary hover:bg-secondary'
            >
              Start vergelijking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedItemsPopup;
