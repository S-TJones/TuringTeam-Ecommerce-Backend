// src/services/productService.js

const BASE_URL = 'https://api.example.com'; // Replace with getProduct-byID API endpoint

export const fetchProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }

    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error; // Rethrow the error for handling in components
  }
};