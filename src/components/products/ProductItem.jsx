import { Link } from 'react-router-dom';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Checkbox from '../misc/Checkbox';
import { useState } from 'react';

function ProductItem({ product, onCheck, isComparisonPage }) {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleCheck = (product, checkedState) => {
    setIsChecked(checkedState); 
    onCheck(product, checkedState); 
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
  };

  return (
    <div
      className={`p-2 border box-border bg-white  border-gray-300 rounded-xl lg:max-w-80 xl:max-w-96${
        isChecked ? 'border-2 border-secondary' : ''
      }`}
    >
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
              <Checkbox product={product} onCheck={handleCheck} />
            </div>
          )}
          <div
            className={`flex items-center gap-2 ${
              isComparisonPage ? 'w-full' : ''
            } bg-green-700 justify-between`}
          >
            <p
              className={`${
                !isComparisonPage ? 'hidden' : ''
              } text-primary text-xl`}
            >
              €{product.price}
            </p>

            {quantity > 0 ? (
              <div className='flex items-center gap-2 border rounded-xl border-secondary'>
                <button
                  className='p-2 text-primary group size-10'
                  onClick={decreaseQuantity}
                >
                  <MinusIcon className='text-primary rounded-xl group-hover:text-primary' />
                </button>
                <span className='text-primary'>{quantity}</span>
                <button
                  className='p-2 text-primary group size-10'
                  onClick={increaseQuantity}
                >
                  <PlusIcon className='text-primary rounded-xl group-hover:text-primary' />
                </button>
              </div>
            ) : (
              <button
                className='p-2 bg-white text-primary rounded-xl group hover:bg-secondary size-10'
                onClick={increaseQuantity}
              >
                <PlusIcon className='text-primary group-hover:text-primary' />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
