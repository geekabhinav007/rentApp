// src/components/CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import products from '../data';

const categoriesImage = {
  Furnitures: "https://media.istockphoto.com/id/1413428981/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=1NhHJ9jHYfpIfQE03cEybhGHePuqk62kwUVhudY9c44=",
  Electronic: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
  Mobile: "https://images.unsplash.com/photo-1551817958-20204d6ab212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
}


const CategoryList = () => {
  // Get all unique categories
  const categories = [...new Set(products.map(product => product.categories))];

  return (
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {categories.map((category, index) => (
        <div key={index} > {/* Add some margin to the bottom of each column */}
          <Link to={`/category/${category}`}>
            <Card style={{ width: '18rem' , margin:'0.5rem', padding:'0.5rem'}}>
              <Card.Img variant="top" src={categoriesImage[category]} alt={category} style={{ maxHeight: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Button variant="primary">{category}</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};


export default CategoryList;





