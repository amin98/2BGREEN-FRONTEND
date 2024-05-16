import { Link } from 'react-router-dom';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import Checkbox from '../misc/Checkbox';
import productData from '../../product.json'; // Adjust the path according to your project structure
import greenRoofImage from '../../images/greenroof.png'; // Import the image

function ProductItem({ product, onCheck }) {
  return (
    <div className='border p-2 m-5 shadow-md rounded-lg max-w-80'>
      <div className='flex h-full flex-col justify-between gap-2'>
        <Link className='flex justify-center' to=''>
          <img className='size-50' src={product.image} alt={product.title} />
        </Link>
        <h1 className='text-xl text-lime-agreen'>{product.title}</h1>
        <p className='truncate-2-lines text-primary'>{product.description}</p>
        <p className='text-primary text-xl'>€ {product.price}</p>
        <div className='flex justify-between '>
          <div>
            <Checkbox product={product} onCheck={onCheck} />
          </div>
          <div className='flex bg-green-700 items-center gap-2 '>
            {/* <button className='relative group bg-primary hover:bg-secondary p-2 rounded-md size-10'>
              <BookmarkIcon className='text-white group-hover:text-primary' />
            </button> */}
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
