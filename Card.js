// src/components/Card.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image, price }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ maxHeight: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="primary">Take on rent</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
