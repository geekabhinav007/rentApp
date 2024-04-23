// src/App.js
import React, { useEffect, useState } from 'react';
import ProductCard from './components/Card'; 
import products from './data';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedProducts = await Promise.all(products.map(async (product) => {
        const response = await fetch('https://api.api-ninjas.com/v1/randomimage?category=nature', {
          headers: { 'X-Api-Key': 'xb0JCMbkcolMg2YmDoXJZw==fUtcAvWxFv01H6Rx', 'Accept': 'image/jpg'}
        });
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        return { ...product, image: imageUrl };
      }));
      setProductData(updatedProducts);
    };
    fetchImages();
  }, []);

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {productData.map((product) => (
        <div style={{ flex: '1 0 21%', margin: '1%' }} key={product.id}>
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
