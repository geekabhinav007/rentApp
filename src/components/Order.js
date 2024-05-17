import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { CartContext } from './CartContext';
import moment from 'moment';

function Order() {
  const { getOrders } = useContext(CartContext);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(auth.currentUser); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    if (user) {
      getOrders(user.uid).then(fetchedOrders => {
        setOrders(fetchedOrders);
      });
    }
  }, [user]);

  return (
    <div className='rounded-xl p-4 sm:p-10 mx-4 sm:mx-10 mt-10 mb-10 bg-gray-100'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4'>Order History</h2>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className='mb-4 bg-white p-4 rounded shadow'>
            <h3 className='text-lg font-medium mb-2'>Order ID: {order.orderId}</h3>
            <p><strong className='text-green-700'>Order Date: </strong>{moment(order.date, 'MM/DD/YYYY, h:mm:ss a').format('MM/DD/YYYY')}</p>
            <p><strong className='text-green-700'>Order Time: </strong>{moment(order.date, 'MM/DD/YYYY, h:mm:ss a').format('h:mm:ss a')}</p>

            <p><strong className='text-green-700'>Total Amount Paid:</strong> ₹{order.orderPrice}</p>
            <ul>
              <ul>
                {order.items.map((item, itemIndex) => (
                  <li key={itemIndex} className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mb-2 rounded shadow'>
                    <img className='w-24 h-24 sm:w-16 sm:h-16 object-cover rounded' src={item.image} alt={item.name} />
                    <div className='mt-4 sm:mt-0 sm:ml-4'>
                      <h4 className='text-lg font-medium'>{item.name}</h4>
                      <p className='text-sm text-gray-600'>{item.description}</p>
                      <p><strong className='text-green-700'>Selected Plan:</strong> {item.selectedPlan}</p>
                      <p><strong className='text-green-700'>Item Total Price:</strong> ₹{item.itemTotalPrice}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </ul>
          </div>
        ))
      ) : (
        <p className='text-lg text-gray-600'>You have not placed any orders.</p>
      )}
    </div>
  );
}



export default Order;
