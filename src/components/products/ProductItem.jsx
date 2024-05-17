import { Link } from 'react-router-dom';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Checkbox from '../misc/Checkbox';
import productData from '../../product.json'; // Adjust the path according to your project structure
import greenRoofImage from '../../images/greenroof.png'; // Import the image

function ProductItem({ product, onCheck, isComparisonPage }) {
  return (
    <div className='border p-2  shadow-md rounded-lg min-w-36 max-w-80'>
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
  );
}

export default ProductItem;
