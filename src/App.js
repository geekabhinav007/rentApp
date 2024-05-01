// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ProductCard from './components/Card';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import products from './data';

const CategoryProducts = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        product.categories === category && (
          <div className="flex-1 m-1" key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </div>
        )
      ))}
    </div>
  );
};


function App() {
  return (
    <Router>
      <div  >
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
