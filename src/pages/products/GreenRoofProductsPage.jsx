import { useState, useEffect } from 'react';
import productData from '../../apis/mockAPI/greenroof.json';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../../components/products/ProductItem';
import FilterCheckbox from '../../components/misc/FilterCheckbox';
import LoadingAnimation from '../../components/misc/LoadingAnimation';
import PriceFilterSlider from '../../components/misc/PriceFilterSlider';
import SelectedItemsPopup from '../../components/misc/SelectedItemsPopup';

const GreenRoofProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    appel: [],
    price: [0, 1000],
  });

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

  const removeItem = productId => {
    const newSelectedItems = selectedItems.filter(
      item => item.id !== productId
    );
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

  const handlePriceChange = priceRange => {
    setFilters(prevFilters => ({ ...prevFilters, price: priceRange }));
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const appelMatch =
      filters.appel.length === 0 || filters.appel.includes(product.appel);
    const priceMatch =
      product.price >= filters.price[0] && product.price <= filters.price[1];
    return categoryMatch && appelMatch && priceMatch;
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

  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  const navigateToComparison = () => {
    navigate('/comparison');
  };

  return (
    <>
      {selectedItems.length > 0 && (
        <SelectedItemsPopup
          selectedItems={selectedItems}
          removeItem={removeItem}
          navigateToComparison={navigateToComparison}
        />
      )}
      <div className='flex flex-col justify-start '>
        <h1 className='flex justify-start mt-5 text-3xl font-semibold text-primary'>
          Groendaken
        </h1>
        <div className='flex'>
          {/* Filter bar */}
          <div className='flex-col hidden w-2/12 gap-5 px-3 py-3 mt-5 bg-white border rounded-md shadow-sm md:flex'>
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
            <PriceFilterSlider
              min={minPrice}
              max={maxPrice}
              value={filters.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className='flex flex-wrap justify-center w-full h-full md:justify-start'>
            <div className='grid grid-cols-1 gap-6 mt-5 md:mx-5 lg:mx-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {currentItems.map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onCheck={handleCheck}
                  isChecked={selectedItems.some(item => item.id === product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenRoofProductsPage;
