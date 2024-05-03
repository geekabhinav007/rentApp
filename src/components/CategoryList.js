// src/components/CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import products from '../data';
import categoriesImage from '../catData';

const CategoryList = () => {
  // Get all unique categories
  const categories = [...new Set(products.map(product => product.categories))];

  return (
    <>
<Hero/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 ">
      {categories.map((category, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 transform transition duration-500 ease-in-out hover:scale-105 hover:rotate-3">
          <Link to={`/category/${category}`}>
            <img className="p-4 rounded object-cover w-full h-48" src={categoriesImage[category]} alt={category} />
          </Link>
          <div className="px-5 pb-5">
            <Link to={`/category/${category}`}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{category}</h5>
            </Link>
            <div className="flex items-center justify-between">
              <Link to={`/category/${category}`}>
                <button className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
     );
};

export default CategoryList;

