//compnent/CartContext.js

import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const addToCart = async (item) => {
    
    const response = await axios.post('https://bbr-vku7.onrender.com/cart/add', item);
    setCartItems(response.data);
  };

  const removeFromCart = async (id , uid) => {
    const response = await axios.post('https://bbr-vku7.onrender.com/cart/remove', { id, userId: uid });
    setCartItems(response.data);
};


  const getCartItems = async (uid) => {
    const response = await axios.get(`https://bbr-vku7.onrender.com/cart`, { params: { uid: uid } });
    setCartItems(response.data);
  };

// Add Order History i need all item data and user id should be passed to the backend
  const addToOrder = async (uid, order) => {
    const response = await axios.post('https://bbr-vku7.onrender.com/order/add', { uid, order });
    setOrderItems(response.data);
  };

  const getOrders = async (uid) => {
    const response = await axios.get(`https://bbr-vku7.onrender.com/order`, { params: { uid: uid } });
    setOrderItems(response.data);
    return response.data;
  }
 

const clearCart = async (uid) => {
  try {
    const response = await axios.post('https://bbr-vku7.onrender.com/cart/clear', { uid });
    setCartItems(response.data);
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};

  
  

  return (
    <CartContext.Provider value={{ clearCart, cartItems, orderItems, getCartItems, addToCart, removeFromCart , addToOrder , getOrders}}>
      {children}
    </CartContext.Provider>
  );
};