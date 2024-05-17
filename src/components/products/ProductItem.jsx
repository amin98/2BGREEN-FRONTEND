import { Link } from 'react-router-dom';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Checkbox from '../misc/Checkbox';
import productData from '../../product.json'; // Adjust the path according to your project structure
import greenRoofImage from '../../images/greenroof.png'; // Import the image

function ProductItem({ product, onCheck, isComparisonPage }) {
  return (
    <div className='border p-2  shadow-md rounded-md min-w-36 max-w-80'>
      <div className='relative flex h-full flex-col justify-between gap-2'>
        {isComparisonPage && (
          <button className=' absolute top-0 z-10  right-0'>
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
              € {product.price}
            </p>

            <button className='relative group bg-primary hover:bg-secondary p-2 rounded-md size-10'>
              <PlusIcon className='text-white group-hover:text-primary' />
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
    //           <XCircleIcon className='text-gray-500 h-6 w-6' />
    //         </button>
    //       )}
    //       <Link to='' className='flex justify-center'>
    //         <img
    //           src={product.image}
    //           alt={product.title}
    //           className='size-32 object-contain'
    //         />
    //       </Link>
    //     </div>
    //     <div className='flex flex-col justify-center'>
    //       <h1 className='text-xl font-semibold text-lime-600'>
    //         {product.title}
    //       </h1>
    //       <p className='line-clamp-2 text-gray-700'>{product.description}</p>
    //     </div>

    //     {/* Row 2 */}
    //     <div className='col-span-2 grid grid-cols-3 gap-4 items-center'>
    //       {isComparisonPage ? (
    //         <p className='text-xl text-gray-700 text-center'>
    //           €{product.price}
    //         </p>
    //       ) : (
    //         <div className='flex items-center'>
    //           <input
    //             type='checkbox'
    //             checked={product.checked}
    //             onChange={() => onCheck(product)}
    //             className='h-5 w-5 text-green-500'
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
    //         <button className='bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded-md flex items-center'>
    //           <PlusIcon className='h-5 w-5' />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductItem;
