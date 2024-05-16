import { useState, useEffect } from 'react';
import productData from '../product.json'; // Adjust the path according to your project structure

import ProductItem from '../components/products/ProductItem';

const ProductPage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate a fetch with a delay
    setTimeout(() => {
      setProduct(productData);
    }, 1000);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='text-3xl text-primary font-semibold ml-5 mt-5'>
        Groendaken
      </h1>
      {/* <div className='bg-white w-20 text-center p-1 ml-5 mt-5 border rounded-xl'>
        Filter
      </div> */}
      <div className='flex '>
        <div className='hidden border md:flex m-5 rounded-tr-md w-52 bg-gray-100'>
          Filter
        </div>
        <div className='flex flex-wrap justify-start w-full h-full'>
          <div className='flex justify-start flex-wrap w-full'>
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
            <ProductItem key={product.id} product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
