// src/components/CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import products from '../data';
import categoriesImage from '../catData';



const CategoryList = () => {
  // Get all unique categories
  const categories = [...new Set(products.map(product => product.categories))];

  return (
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap',objectFit: 'cover'  }}>
      {categories.map((category, index) => (
        <div key={index} > 
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





