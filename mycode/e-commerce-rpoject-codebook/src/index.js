import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FilterProvider } from './context';
import { CartProvider } from './context/CartContext';

import { ScrollToTop } from './components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <Router>

      <CartProvider>

        <FilterProvider>

          <ScrollToTop/>

          <ToastContainer/>

          <App />

        </FilterProvider>

      </CartProvider>

    </Router>

  </React.StrictMode>

);

