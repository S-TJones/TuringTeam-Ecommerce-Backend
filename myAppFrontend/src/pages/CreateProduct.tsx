
import React, { useState } from 'react';

const CreateProduct: React.FC = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const handleCreate = () => {
    // Implement logic to send the new product data to the backend
    // Example:
    // createProduct(product).then(() => {
    //   // Redirect or show a success message
    // });
  };

  return (
    <div>
      <h1>Create Product</h1>
      <input
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
      />
      <textarea
        placeholder="Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <button onClick={handleCreate}>Create Product</button>
    </div>
  );
};

export default CreateProduct;
