import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { AuthProvider, CategoryProvider, DateProvider, FilterProvider, HotelProvider, WishlistProvider } from './Context';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <HotelProvider>
    <WishlistProvider>
      <AuthProvider>
      <FilterProvider>
      <DateProvider>
      <CategoryProvider>
    <App />
    </CategoryProvider>
      </DateProvider>
      </FilterProvider>
      </AuthProvider>
      </WishlistProvider>
      </HotelProvider>
    </Router>
      
  </React.StrictMode>
);


