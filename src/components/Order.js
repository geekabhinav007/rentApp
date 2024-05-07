import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { CartContext } from './CartContext';

function Order() {
  const { getOrders } = useContext(CartContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      getOrders(user.uid).then(fetchedOrders => {
        setOrders(fetchedOrders);

      });
    }
  }, [getOrders]);

  return (
    <div className='rounded-xl p-4 sm:p-10 mx-4 sm:mx-10 mt-10 mb-10 bg-gray-100'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4'>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 mb-2 rounded shadow'>
              <img className='w-24 h-24 sm:w-16 sm:h-16 object-cover rounded' src={order.items.image} alt={order.items.name} />
              <div className='mt-4 sm:mt-0 sm:ml-4'>
                <h3 className='text-lg font-medium'>{order.items.name}</h3>
                <p className='text-sm text-gray-600'>{order.items.description}</p>
                <p><strong className='text-green-700'>Selected Plan:</strong> {order.items.selectedPlan}</p>
                <p><strong className='text-green-700'>Order ID:</strong> {order.id}</p>

                <p><strong className='text-green-700'>Order Date: </strong>{new Date(order.date).toLocaleDateString()}</p>
                <p><strong className='text-green-700'>Order Time: </strong>{new Date(order.date).toLocaleTimeString()}</p>



                <p><strong className='text-green-700'>Amount Paid:</strong> ₹{order.totalPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-lg text-gray-600'>You have not placed any orders.</p>
      )}
    </div>
  );
}

export default Order;
