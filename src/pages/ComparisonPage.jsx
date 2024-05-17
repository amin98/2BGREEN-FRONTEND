import { useState, useEffect } from 'react';
import ProductItem from '../components/products/ProductItem';
const ComparisonPage = props => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const storedItems = sessionStorage.getItem('selectedItems');
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className='flex flex-col m-3 '>
      <h1 className='text-3xl ml-3 flex justify-start text-primary font-semibold my-5'>
        Vergelijken
      </h1>
      <div className='flex flex-wrap justify-center md:justify-start w-full h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mx-5'>
          {selectedItems.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              isComparisonPage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
