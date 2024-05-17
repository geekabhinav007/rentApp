import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ProductCard from './components/Card';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import products from './data';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'
import Login from './components/Login';
import Order from './components/Order';
import SearchResultNotFound from './components/SearchResultNotFound';

const CategoryProducts = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex items-center justify-center py-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search product..."
            onChange={handleSearch}
            className="w-full h-10 pl-10 pr-20 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
        s-17-7.626-17-17S14.61,6,23.984,6z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-20">


        {
          (filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              product.categories === category && (
                <div className="flex-1 m-1" key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                </div>
              ))))
            :
            (
              <SearchResultNotFound />
            ))}
      </div>
    </>
  );
};
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
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
