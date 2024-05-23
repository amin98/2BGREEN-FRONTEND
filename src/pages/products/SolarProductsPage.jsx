import { useState, useEffect } from 'react';
import productData from '../../product.json';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../../components/products/ProductItem';
import FilterCheckbox from '../../components/misc/FilterCheckbox';
import LoadingAnimation from '../../components/misc/LoadingAnimation';

const SolarProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ category: [], appel: [] });

  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData);
    }, 1000);
  }, []);

  const handleCheck = (product, isChecked) => {
    const newSelectedItems = isChecked
      ? [...selectedItems, product]
      : selectedItems.filter(item => item.id !== product.id);
    setSelectedItems(newSelectedItems);
    sessionStorage.setItem('selectedItems', JSON.stringify(newSelectedItems));
  };

  const handleFilterChange = (type, value, isChecked) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (isChecked) {
        newFilters[type].push(value);
      } else {
        newFilters[type] = newFilters[type].filter(item => item !== value);
      }
      return newFilters;
    });
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const appelMatch =
      filters.appel.length === 0 || filters.appel.includes(product.appel);
    return categoryMatch && appelMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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
      <div className='flex flex-col justify-center '>
        <h1 className='flex justify-start mt-5 text-3xl font-semibold text-primary'>
          Producten
        </h1>
        <div className='flex'>
          <div className='flex-col hidden gap-5 py-3 pl-3 mt-5 border rounded-md shadow-sm md:flex w-52'>
            <div>
              <h2 className='text-lg font-bold text-primary'>Categorie</h2>
              <ul className='flex flex-col gap-1 text-primary'>
                <li>
                  <FilterCheckbox
                    label={'Groendaken'}
                    onChange={isChecked =>
                      handleFilterChange('category', 'Groendaken', isChecked)
                    }
                  />
                </li>
                <li>
                  <FilterCheckbox
                    label={'Zonnepanelen'}
                    onChange={isChecked =>
                      handleFilterChange('category', 'Zonnepanelen', isChecked)
                    }
                  />
                </li>
                <li>
                  <FilterCheckbox
                    label={'Laden'}
                    onChange={isChecked =>
                      handleFilterChange('category', 'Laden', isChecked)
                    }
                  />
                </li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-bold text-primary'>Appel</h2>
              <ul className='flex flex-col gap-1 text-primary'>
                <li>
                  <FilterCheckbox
                    label={'Huisje'}
                    onChange={isChecked =>
                      handleFilterChange('appel', 'Huisje', isChecked)
                    }
                  />
                </li>
                <li>
                  <FilterCheckbox
                    label={'Boompje'}
                    onChange={isChecked =>
                      handleFilterChange('appel', 'Boompje', isChecked)
                    }
                  />
                </li>
                <li>
                  <FilterCheckbox
                    label={'Beestje'}
                    onChange={isChecked =>
                      handleFilterChange('appel', 'Beestje', isChecked)
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-wrap justify-center w-full h-full md:justify-start'>
            <div className='grid grid-cols-1 gap-6 mt-5 md:mx-5 lg:mx-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {currentItems.map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onCheck={handleCheck}
                />
              ))}
            </div>
            {/* <div className='relative bottom-0 flex justify-center mt-5 ml-5'>
              {Array(Math.ceil(filteredProducts.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`mx-1 px-2 rounded-sm ${
                      currentPage === index + 1
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarProductsPage;
