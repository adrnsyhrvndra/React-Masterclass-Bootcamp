import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

// Api Key : 98c598b19c7f7b6235f93634d4acb8d4

// Search

// https://api.themoviedb.org/3/search/movie?api_key=98c598b19c7f7b6235f93634d4acb8d4&language=en-US&query=avatar&page=1&include_adult=false

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <Router>

      <ScrollToTop/>

      <App />

    </Router>

  </React.StrictMode>

);

