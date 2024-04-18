import { useState } from 'react';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import './App.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />

        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;