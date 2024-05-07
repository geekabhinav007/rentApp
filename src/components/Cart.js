import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { auth } from '../firebase';


function Cart() {
  const { cartItems, getCartItems, removeFromCart, addToOrder } = useContext(CartContext);
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

  const handleRemoveItem = async (id, uid) => {
    // console.log(`Item ID: ${id}`);
    // console.log(`User ID: ${uid}`);
    await removeFromCart(id, uid);
    getCartItems(uid);
  };


  // const handlePlaceOrder = (totalPrice) => {
  //   if (totalPrice !== 0) {
  //     alert(`Your order has been placed.`);
  //   }else{
  //     alert(`Please Add Item in the Cart`);
  //   }
  // };

  const generateOrderId = () => {
    return Math.random().toString(36).substr(2, 9);
  }



  // Move the useEffect hook outside of handlePlaceOrder
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      getCartItems(user.uid);
    }
  }, [getCartItems]);

  const handlePlaceOrder = async (cartItems) => {

    if (totalPrice !== 0) {
      const user = auth.currentUser;
      if (user) {
        const order = {
          id: generateOrderId(),
          items: cartItems[0],
          totalPrice: totalPrice,
          date: new Date().toISOString(),
        };

        await addToOrder(user.uid, order);
        alert(`Your order has been placed.`);
      }
    } else {
      alert(`Please Add Item in the Cart`);
    }
  };


  // for managing the cart after refresh also
  // useEffect(() => {
  //   const user = auth.currentUser;
  //   if (user) {
  //     const storedCartItems = localStorage.getItem('cartItems');
  //     if (storedCartItems) {
  //       getCartItems(JSON.parse(storedCartItems));
  //     } else {
  //       getCartItems(user.uid).then((items) => {
  //         getCartItems(items);
  //         localStorage.setItem('cartItems', JSON.stringify(items));
  //       });
  //     }
  //   }
  // }, [getCartItems]);





  return (
    <div className='rounded-xl p-4 sm:p-10 mx-4 sm:mx-10 mt-10 mb-10 bg-gray-100'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4'>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 mb-2 rounded shadow'>
              <img className='w-24 h-24 sm:w-16 sm:h-16 object-cover rounded' src={item.image} alt={item.name} />
              <div className='mt-4 sm:mt-0 sm:ml-4'>
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
              <button className=" bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handleRemoveItem(item.id, item.uid)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-lg text-gray-600'>Your cart is empty.</p>
      )}
      <p><strong>Total Price:</strong> ₹{totalPrice}</p>


      <button onClick={() => handlePlaceOrder(cartItems)} disabled={Object.keys(selectedPlan).length !== cartItems.length} className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2">Place Order</button>


    </div>
  );
}


export default Cart;
