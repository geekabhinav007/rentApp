import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';


function Cart() {
  const { cartItems } = useContext(CartContext);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [itemPrices, setItemPrices] = useState({});

  const handlePlanChange = (plan, item) => {
    setSelectedPlan({ ...selectedPlan, [item.id]: plan });
    let price;
    if (plan === 'day') {
      price = Number(item.rentPerDay);
    } else if (plan === 'month') {
      price = Number(item.rentPerMonth);
    } else {
      price = Number(item.rentPerYear);
    }
    const currentItemPrice = { [item.id]: price };
    setItemPrices({ ...itemPrices, [item.id]: Math.round(currentItemPrice[item.id] + Number(item.securityDeposit)) });
  };
  const totalPrice = Object.values(itemPrices).reduce((a, b) => a + b, 0);


  const handlePlaceOrder = () => {
    // Logic to place the order
    alert(`Your order has been placed.`);
  };

  return (
    <div className='p-10 m-10 bg-gray-100'>
      <h2 className='text-2xl font-bold mb-4'>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
  <li key={index} className='flex items-center justify-between bg-white p-4 mb-2 rounded shadow'>
    <img className='w-16 h-16 object-cover rounded' src={item.image} alt={item.name} />
    <div className='ml-4'>
      <h3 className='text-lg font-medium'>{item.name}</h3>
      <p className='text-sm text-gray-600'>{item.description}</p>
      <p><strong className='text-green-700'>Selected Plan:</strong> {item.selectedPlan}</p>
                <div className="flex flex-col">
                  <label className='text-green-700'><input type="radio" name={`plan${item.id}`} onChange={() => handlePlanChange('day', item)} />  ₹{item.rentPerDay}/Day</label>
                  <label className='text-green-700'><input type="radio" name={`plan${item.id}`} onChange={() => handlePlanChange('month', item)} />  ₹{item.rentPerMonth}/Month</label>
                  <label className='text-green-700'><input type="radio" name={`plan${item.id}`} onChange={() => handlePlanChange('year', item)} />  ₹{item.rentPerYear}/Year</label>
                </div>
                <p><strong className='text-green-700'>Security Deposit:</strong> ₹{item.securityDeposit}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-lg text-gray-600'>Your cart is empty.</p>
      )}
      <p><strong>Total Price:</strong> ₹{totalPrice}</p>
      <button className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" onClick={handlePlaceOrder} disabled={Object.keys(selectedPlan).length !== cartItems.length}>Place Your Order</button>
    </div>
  );
}

export default Cart;
