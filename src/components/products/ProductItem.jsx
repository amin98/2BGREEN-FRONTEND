import { Link } from 'react-router-dom';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Checkbox from '../misc/Checkbox';

function ProductItem({ product, onCheck, isComparisonPage }) {
  return (
    <div className='p-2 border rounded-xl min-w-36 max-w-80'>
      <div className='relative flex flex-col justify-between h-full gap-2'>
        {isComparisonPage && (
          <button className='absolute top-0 right-0 z-10 '>
            <XCircleIcon className='text-gray-500 size-9' />
          </button>
        )}
        <Link className='flex justify-center' to=''>
          <img className='size-50' src={product.image} alt={product.title} />
        </Link>
        <h1 className='text-xl text-lime-agreen'>{product.title}</h1>
        <p className='truncate-2-lines text-primary'>{product.description}</p>
        <p
          className={`${isComparisonPage ? 'hidden' : ''} text-primary text-xl`}
        >
          € {product.price}
        </p>
        <div className='flex justify-between '>
          {!isComparisonPage && (
            <div>
              <Checkbox product={product} onCheck={onCheck} />
            </div>
          )}
          <div
            className={`flex ${
              isComparisonPage ? 'w-full' : ''
            }  justify-between bg-green-700 items-center gap-2 `}
          >
            <p
              className={`${
                !isComparisonPage ? 'hidden' : ''
              } text-primary text-xl`}
            >
              {/* for the slider price filter this needs to be considered */}€
              {product.price}
            </p>

            <button className='relative p-2 bg-white text-primary rounded-xl group hover:bg-secondary size-10'>
              <PlusIcon className='text-primary group-hover:text-primary' />
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className='border p-4 shadow-md rounded-md min-w-[144px] max-w-[320px]'>
    //   <div className='grid grid-cols-2 gap-4'>
    //     {/* Row 1 */}
    //     <div className='relative'>
    //       {' '}
    //       {/* Container for image and X button */}
    //       {isComparisonPage && (
    //         <button className='absolute top-0 right-0 z-10'>
    //           <XCircleIcon className='w-6 h-6 text-gray-500' />
    //         </button>
    //       )}
    //       <Link to='' className='flex justify-center'>
    //         <img
    //           src={product.image}
    //           alt={product.title}
    //           className='object-contain size-32'
    //         />
    //       </Link>
    //     </div>
    //     <div className='flex flex-col justify-center'>
    //       <h1 className='text-xl font-semibold text-lime-600'>
    //         {product.title}
    //       </h1>
    //       <p className='text-gray-700 line-clamp-2'>{product.description}</p>
    //     </div>

    //     {/* Row 2 */}
    //     <div className='grid items-center grid-cols-3 col-span-2 gap-4'>
    //       {isComparisonPage ? (
    //         <p className='text-xl text-center text-gray-700'>
    //           €{product.price}
    //         </p>
    //       ) : (
    //         <div className='flex items-center'>
    //           <input
    //             type='checkbox'
    //             checked={product.checked}
    //             onChange={() => onCheck(product)}
    //             className='w-5 h-5 text-green-500'
    //           />
    //           <span className='ml-2 text-gray-700'>Vergelijk</span>
    //         </div>
    //       )}
    //       <div
    //         className={`col-start-3 flex ${
    //           isComparisonPage ? 'justify-end' : 'justify-between'
    //         } space-x-2 items-center`}
    //       >
    //         {isComparisonPage && (
    //           <p className='text-xl text-gray-700'>€{product.price}</p>
    //         )}
    //         <button className='flex items-center px-4 py-2 text-white rounded-md bg-lime-600 hover:bg-lime-700'>
    //           <PlusIcon className='w-5 h-5' />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductItem;
