
export const fetchProductDetails = async (productId: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/v1/products/${productId}`);
    
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