// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import products from '../data';

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

  return product ? (
    <Card style={{ width: '18rem', margin: 'auto', marginTop: '2rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ maxHeight: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{product.name}</Card.Title>
        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
        <Card.Text><strong>Description:</strong> {product.description}</Card.Text>
        <Card.Text><strong>Rent per day:</strong> ${product.rentPerDay}</Card.Text>
        <Card.Text><strong>Rent per month:</strong> ${product.rentPerMonth}</Card.Text>
        <Card.Text><strong>Rent per year:</strong> ${product.rentPerYear}</Card.Text>
        <Card.Text><strong>Security Deposit:</strong> ${product.securityDeposit}</Card.Text>
        <Card.Text><strong>Availability Place:</strong> {product.availabilityPlace}</Card.Text>
        <Button variant="primary" onClick={handleAvailability}>Check Availability</Button>
        <Button variant="primary" onClick={handleShowOnMap}>Show on Map</Button>
      </Card.Body>
    </Card>
  ) : (
    <p>Product not found</p>
  );
};

export default ProductDetails;
