import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import chargingData from '../apis/mockAPI/charging.json';
import greenroofData from '../apis/mockAPI/greenroof.json';
import solarData from '../apis/mockAPI/solar.json';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import LoadingAnimation from '../components/misc/LoadingAnimation';

const ProductDetailsPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
  };
  useEffect(() => {
    let selectedProduct;
    if (category === 'laden') {
      selectedProduct = chargingData.find(item => item.id === parseInt(id));
    } else if (category === 'groendaken') {
      selectedProduct = greenroofData.find(item => item.id === parseInt(id));
    } else if (category === 'zonnepanelen') {
      selectedProduct = solarData.find(item => item.id === parseInt(id));
    }
    console.log(category);
    setProduct(selectedProduct);
  }, [category, id]);

  if (!product) {
    return <LoadingAnimation />;
  }

  return (
    <div className='flex flex-col items-start justify-start p-4 mx-20'>
      <div className='flex items-center gap-3 p-3 rounded-md '>
        <div className='w-2/5'>
          <img
            src={`${product.image}`}
            alt={product.title}
            className='w-auto rounded-lg shadow-md '
          />
        </div>
        <div className='flex flex-col mt-4 lg:mt-0'>
          <h1 className='self-start text-3xl font-bold text-primary'>
            {product.title}
          </h1>
          <p className='mt-2 text-lg text-gray-700'>{product.description}</p>
          <div className='flex items-center gap-5'>
            <p className='text-2xl font-semibold text-primary'>
              €{product.price}
            </p>
            <button className='self-start px-4 py-2 font-bold text-white transition duration-200 rounded-lg bg-primary hover:bg-secondary'>
              Add to Cart
            </button>
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
      <div className='flex flex-col self-start'>
        <h2 className='text-2xl font-semibold'>Product Specifications</h2>
        <ul className='flex flex-col gap-2 my-4 text-xl'>
          <li>
            <span className='font-semibold'>Length:</span> 10.5 m
          </li>
          <li>
            <span className='font-semibold'>Width:</span> 5.2 m
          </li>
          <li>
            <span className='font-semibold'>Height:</span> 0.25 m
          </li>
          <li>
            <span className='font-semibold'>Warranty:</span> until September
            2024
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
