import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Register from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import './App.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

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
              <Route path='/products' element={<ProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStatusContextProvider>
    </div>
  );
}

export default App;
