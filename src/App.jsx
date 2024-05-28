import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import RegisterPage from './components/auth/RegisterPage';
import ProductCategoriesPage from './pages/ProductCategoriesPage';
import LoginPage from './pages/LoginPage';
import ComparisonPage from './pages/ComparisonPage';
import ChargingProductsPage from './pages/products/ChargingProductsPage';
import GreenRoofProductsPage from './pages/products/GreenRoofProductsPage';
import SolarProductsPage from './pages/products/SolarProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CreateProduct from './components/products/CreateProduct';
import TestProductPage from './pages/TestProductPage';
import './App.css';
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
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/comparison' element={<ComparisonPage />} />
              <Route path='/laden' element={<ChargingProductsPage />} />
              <Route path='/products' element={<ProductCategoriesPage />} />
              <Route path='/groendaken' element={<GreenRoofProductsPage />} />
              <Route path='/zonnepanelen' element={<SolarProductsPage />} />
              <Route path='/create-product' element={<CreateProduct />} />
              <Route path='/test-product' element={<TestProductPage />} />
              <Route
                path='/product/:category/:id'
                element={<ProductDetailsPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStatusContextProvider>
    </div>
  );
}

export default App;
