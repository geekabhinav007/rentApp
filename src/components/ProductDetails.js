import React, { useState, useContext, useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import products from '../data';
import PageNotFound from './PageNotFound';
import { CartContext } from './CartContext';
import { auth } from '../firebase';


const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // Login or not login check

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const handleAvailability = () => {
    // Logic to check availability
    alert('This product is available!');
  };

  const handleShowOnMap = () => {
    // Logic to show location on Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${product.availabilityPlace}`);
  };

  
  const handleAddToCart = () => {
    // Logic to add the product to the cart
    const productWithPlan = { ...product, selectedPlan, totalPrice };
    const user = auth.currentUser;
    if (user) {
      const productWithUser = { ...productWithPlan, uid: user.uid };
      addToCart(productWithUser);
      alert(`${product.name} has been added to the cart.`);
    } else {
      alert('Please log in to add items to the cart.');
    }
  };
  

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    let price;
    if (plan === 'day') {
      price = product.rentPerDay;
    } else if (plan === 'month') {
      price = product.rentPerMonth;
    } else {
      price = product.rentPerYear;
    }
    setTotalPrice(Math.round(Number(price) + Number(product.securityDeposit)));
  };

  

  
  return (
    <div className="flex justify-center items-center py-20">
      {product ? (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-5 max-w-lg">
          <div className="relative">
            <img className="w-full" src={product.image} alt={product.name} />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex flex-col">
              <label className='text-green-700'><input type="radio" name="plan" onChange={() => handlePlanChange('day')} />  ₹{product.rentPerDay}/Day</label>
              <label className='text-green-700'><input type="radio" name="plan" onChange={() => handlePlanChange('month')} />  ₹{product.rentPerMonth}/Month</label>
              <label className='text-green-700'><input type="radio" name="plan" onChange={() => handlePlanChange('year')} />  ₹{product.rentPerYear}/Year</label>
            </div>

            <p><strong className='text-green-700'>Security Deposit:</strong> ₹{product.securityDeposit}</p>
            <p><strong>Total Price:</strong> ₹{totalPrice}</p>
            <p><strong>Availability Place:</strong> {product.availabilityPlace}</p>

            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" onClick={handleAvailability}>Check Availability</button>
            <button className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" onClick={handleShowOnMap}>Show on Map</button>
            {isLoggedIn && (

              <button className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" onClick={handleAddToCart} disabled={!selectedPlan}>Add to Cart</button>
            )}

            {!isLoggedIn && (

              <Link className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" to="/login" disabled={!selectedPlan}>Add to Cart</Link>
            )}

          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default ProductDetails;
