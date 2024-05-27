import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Register from './pages/RegisterPage';
import ProductCategoriesPage from './pages/ProductCategoriesPage';
import LoginPage from './pages/LoginPage';
import ComparisonPage from './pages/ComparisonPage';
import ChargingProductsPage from './pages/products/ChargingProductsPage';
import GreenRoofProductsPage from './pages/products/GreenRoofProductsPage';
import SolarProductsPage from './pages/products/SolarProductsPage';
import ProductDetailsPage from './pages/products/ProductDetailsPage'; // Import the ProductDetailsPage

import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import UserStatusContextProvider from './components/contexts/UserStatus';

function App() {
  return (
    <div className='app'>
      <UserStatusContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<Register />} />
              <Route path='/comparison' element={<ComparisonPage />} />
              <Route path='/laden' element={<ChargingProductsPage />} />
              <Route path='/products' element={<ProductCategoriesPage />} />
              <Route path='/groendaken' element={<GreenRoofProductsPage />} />
              <Route path='/zonnepanelen' element={<SolarProductsPage />} />
              <Route
                path='/product/:category/:id'
                element={<ProductDetailsPage />}
              />{' '}
              {/* Add the new route */}
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStatusContextProvider>
    </div>
  );
}

export default App;
