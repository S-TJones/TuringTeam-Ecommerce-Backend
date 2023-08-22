// ProductList.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  // Assuming products is an array of product objects
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
      datetime: new Date('2023-08-25T10:30:00Z'),
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'https://example.com/product2.jpg',
      datetime: new Date('2023-08-26T14:45:00Z'),
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: 'https://example.com/product3.jpg',
      datetime: new Date('2023-08-27T16:20:00Z'),
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
