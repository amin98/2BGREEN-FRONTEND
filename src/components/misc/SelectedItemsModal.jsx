import { XMarkIcon } from '@heroicons/react/24/solid';

const SelectedItemsModal = ({ items, onClose }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-full max-w-lg p-6 bg-white rounded-lg'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold'>Selected Items</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <XMarkIcon className='w-6 h-6' />
          </button>
        </div>
        <div className='flex overflow-x-auto'>
          {items.map(item => (
            <div key={item.id} className='flex-shrink-0 w-24 m-2'>
              <img
                src={item.image}
                alt={item.title}
                className='object-cover w-full h-24 rounded-md'
              />
              <p className='mt-1 text-sm text-center'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedItemsModal;
