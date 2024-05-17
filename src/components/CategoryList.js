// src/components/CategoryList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import products from '../data';
import categoriesImage from '../catData';
import SearchResultNotFound from './SearchResultNotFound';

const CategoryList = () => {
  // Get all unique categories
  const categories = [...new Set(products.map(product => product.categories))];
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories.filter(category => category.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Hero />
      <div className="flex items-center justify-center py-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
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

      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {filteredCategories.map((category, index) => (
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
                    <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <SearchResultNotFound />
      )}
    </>
  );
};

export default CategoryList;

