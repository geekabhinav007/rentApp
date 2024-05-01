import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';
import PageNotFound from './PageNotFound';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const handleAvailability = () => {
    // Logic to check availability
    alert('This product is available!');
  };

  const handleShowOnMap = () => {
    // Logic to show location on Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${product.availabilityPlace}`);
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
              <label className='text-green-700'><input type="checkbox" />  ₹{product.rentPerDay}/Day</label>
              <label className='text-green-700'><input type="checkbox" />  ₹{product.rentPerMonth}/Month</label>
              <label className='text-green-700'><input type="checkbox" />  ₹{product.rentPerYear}/Year</label>
            </div>

            <p><strong className='text-green-700'>Security Deposit:</strong> ₹{product.securityDeposit}</p>
            <p><strong>Availability Place:</strong> {product.availabilityPlace}</p>

            <button className= "bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" onClick={handleAvailability}>Check Availability</button>
            <button className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2" onClick={handleShowOnMap}>Show on Map</button>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default ProductDetails;
