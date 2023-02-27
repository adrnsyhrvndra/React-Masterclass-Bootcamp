import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // <React.StrictMode> hanya bisa digunakan saat development,jadi kalo di deploy udah gak berjalan.

  <React.StrictMode>

    <App />

  </React.StrictMode>

);
