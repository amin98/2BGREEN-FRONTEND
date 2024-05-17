import { useState, useEffect } from 'react';
import productData from '../product.json'; // Adjust the path according to your project structure
import { useNavigate } from 'react-router-dom';
import ProductItem from '../components/products/ProductItem';
import FilterCheckbox from '../components/misc/FilterCheckbox';
import LoadingAnimation from '../components/misc/LoadingAnimation';
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData);
    }, 1000);
  }, []);

  const handleCheck = (product, isChecked) => {
    let newSelectedItems;
    if (isChecked) {
      newSelectedItems = [...selectedItems, product];
    } else {
      newSelectedItems = selectedItems.filter(item => item.id !== product.id);
    }
    setSelectedItems(newSelectedItems);
    sessionStorage.setItem('selectedItems', JSON.stringify(newSelectedItems));
  };
  if (!products.length) {
    return <LoadingAnimation />;
  }

  return (
    <>
      {selectedItems.length > 0 && (
        <button
          onClick={() => navigate('/comparison')}
          className={`fixed right-10 bg-primary p-3 text-lg border-b-2 border-l-2 border-r-2 z-10 border-secondary rounded-b-xl text-white ${
            selectedItems.length > 0 ? 'pop' : ''
          }`}
        >
          Selected items: {selectedItems.length}
        </button>
      )}
      {/* <h1 className='text-3xl text-primary font-semibold ml-5 mt-5'>
        Groendaken
      </h1> */}
      <div className='flex flex-col'>
        <h1 className='text-3xl flex justify-start text-primary font-semibold ml-5 mt-5'>
          Producten
        </h1>
        <div className='flex'>
          <div className='hidden pl-3 py-3 border mt-5  md:flex flex-col rounded-r-md shadow-sm w-52'>
            <h2 className='text-lg font-bold  text-primary'>Categorie</h2>
            <ul className='flex flex-col gap-1 text-primary'>
              <li>
                <FilterCheckbox label={'Groendaken'} />
              </li>
              <li>
                <FilterCheckbox label={'Zonnepanelen'} />
              </li>
              <li>
                <FilterCheckbox label={'Laden'} />
              </li>
            </ul>
          </div>
          <div className='flex flex-wrap justify-center md:justify-start w-full h-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mx-5'>
              {products.map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onCheck={handleCheck}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
