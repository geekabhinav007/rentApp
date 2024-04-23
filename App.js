// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './components/Card';
import ProductDetails from './components/ProductDetails'; 
import products from './data';

function App() {
  return (
    <Router>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Routes>
          <Route path="/" element={
            <>
              {products.map((product) => (
                <div style={{ flex: '1 0 21%', margin: '1%' }} key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                </div>
              ))}
            </>
          } />
          <Route path="/product/:id" element={<ProductDetails/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
