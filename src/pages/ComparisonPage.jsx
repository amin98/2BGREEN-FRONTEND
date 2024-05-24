import { useState, useEffect } from 'react';
import ProductItem from '../components/products/ProductItem';
import '../styles/ComparisonPage.css';

const ComparisonPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const storedItems = sessionStorage.getItem('selectedItems');
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }
  }, []);

  const renderTableHeaders = () => (
    <tr>
      <th scope='col' className='px-6 py-3 '>
        Selected Products
      </th>
      {selectedItems.map(product => (
        <th scope='col' className='px-6 py-3' key={product.id}>
          {product.name}
        </th>
      ))}
    </tr>
  );

  const renderImageRow = () => (
    <tr className='bg-white border-b'>
      <td className='px-6 py-4 text-lg'>Image</td>
      {selectedItems.map(product => (
        <td className='px-6 py-4' key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className='comparison-image'
          />
        </td>
      ))}
    </tr>
  );

  const renderTableRows = () => {
    const attributes = ['Price', 'Rating', 'Category', 'Brand', 'Description'];

    return attributes.map(attribute => (
      <tr className='text-lg bg-white border-b' key={attribute}>
        <td className='px-6 py-4'>{attribute}</td>
        {selectedItems.map(product => (
          <td className='px-6 py-4' key={product.id}>
            {product[attribute.toLowerCase()] || 'N/A'}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className='flex flex-col m-3 mx-52'>
      <h1 className='flex justify-start my-5 ml-3 text-3xl font-semibold text-primary'>
        Vergelijken
      </h1>
      <div className='relative overflow-x-auto border shadow-sm sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-primary'>
          <thead className='text-xs uppercase text-primary bg-gray-50'>
            {renderTableHeaders()}
          </thead>
          <tbody>
            {renderImageRow()}
            {renderTableRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonPage;
