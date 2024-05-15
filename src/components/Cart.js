import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { auth } from '../firebase';
import logo from '../XingodaLogo.svg';
import axios from 'axios';

function Cart() {
  const { cartItems = [], clearCart, getCartItems, removeFromCart } = useContext(CartContext);


  // Calculate total price for each item
  if (Array.isArray(cartItems)) {

    cartItems.forEach(item => {
      if (item.selectedPlan === 'day') {
        item.totalPrice = Math.round(Number(item.rentPerDay) + Number(item.securityDeposit));
      } else if (item.selectedPlan === 'month') {
        item.totalPrice = Math.round(Number(item.rentPerMonth) + Number(item.securityDeposit));
      } else if (item.selectedPlan === 'year') {
        item.totalPrice = Math.round(Number(item.rentPerYear) + Number(item.securityDeposit));
      }
    });
  }

  let totalPrice = 0;
  if (Array.isArray(cartItems)) {
    totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  // Calculate total price of all items

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      getCartItems(user.uid);
    }
  }, [auth.currentUser]);



  const handleRemoveItem = async (id, uid) => {
    await removeFromCart(id, uid);
    const user = auth.currentUser;
    if (user) {
      getCartItems(user.uid);
    }
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(cartItems, totalPrice) {

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const result = await axios.post("http://localhost:4000/payment/orders", { cartItems, totalPrice });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_xkT5PlIAtmBSBI",
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          totalPrice: amount.toString(),
          cartItems: cartItems,
          uid: cartItems[0].uid,
        };
        const result = await axios.post("http://localhost:4000/payment/success", data);


        alert(result.data.msg);
        // Clear the cart after successful payment
        await clearCart(cartItems[0].uid);
      },
      prefill: {
        name: "Kumar Abhinav",
        email: "krabhinav@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Xingoda HSR Layout Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    
  }

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
                <p><strong className='text-green-700'>Security Deposit:</strong> ₹{item.securityDeposit}</p>
                <p><strong className='text-green-700'>Total Price:</strong> ₹{item.totalPrice}</p>
              </div>
              <button className=" bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handleRemoveItem(item.id, item.uid)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-lg text-gray-600'>Your cart is empty.</p>
      )}
      <p><strong>Total Price of All Items:</strong> ₹{totalPrice}</p>


      <button onClick={() => displayRazorpay(cartItems, totalPrice)} disabled={cartItems.length === 0} className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2">Place Order</button>


    </div>
  );
}



export default Cart;
