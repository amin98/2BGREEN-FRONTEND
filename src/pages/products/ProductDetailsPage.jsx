import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import chargingData from '../../charging.json';
import greenroofData from '../../greenroof.json';
import solarData from '../../solar.json'; // Import solar data
import LoadingAnimation from '../../components/misc/LoadingAnimation';

const ProductDetailsPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let selectedProduct;
    if (category === 'laden') {
      selectedProduct = chargingData.find(item => item.id === parseInt(id));
    } else if (category === 'groendaken') {
      selectedProduct = greenroofData.find(item => item.id === parseInt(id));
    } else if (category === 'zonnepanelen') {
      selectedProduct = solarData.find(item => item.id === parseInt(id));
    }
    setProduct(selectedProduct);
  }, [category, id]);

  if (!product) {
    return <LoadingAnimation />;
  }

  return (
    <div className='container p-4 mx-auto'>
      <div className='flex flex-col lg:flex-row lg:space-x-10'>
        <div className='flex-shrink-0'>
          <img
            src={product.image}
            alt={product.title}
            className='object-cover w-full h-auto rounded-lg shadow-md'
          />
        </div>
        <div className='flex flex-col mt-4 lg:mt-0'>
          <h1 className='text-4xl font-bold text-primary'>{product.title}</h1>
          <p className='mt-2 text-lg text-gray-700'>{product.description}</p>
          <p className='mt-4 text-2xl font-semibold text-secondary'>
            €{product.price}
          </p>
          <button className='px-4 py-2 mt-6 font-bold text-white transition duration-300 rounded-lg bg-primary hover:bg-secondary'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
