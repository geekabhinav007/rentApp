import React, {useState} from 'react';
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
    <div className="flex flex-wrap justify-center pt-20">
      <input 
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="w-full h-10 pl-10 pr-20 rounded-full text-sm focus:outline-none"
        
      />
      
      {filteredProducts.map((product) => (
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
