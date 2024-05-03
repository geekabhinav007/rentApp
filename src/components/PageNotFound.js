import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-64">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="text-lg text-gray-600">The product you're looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
