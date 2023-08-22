
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/productService';
import Product from '../types/Product'; // Import the updated Product interface

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProductDetails(id)
      .then((data: Product) => {
        setProduct(data);
      })
      .catch((error: any) => {
        // Handle errors
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} />
      <p>Date and Time: {product.created_at.toISOString()}</p>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetails;
