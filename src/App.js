import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'
import Login from './components/Login';
import Order from './components/Order';
import ProductList from './components/ProductList';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/category/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
