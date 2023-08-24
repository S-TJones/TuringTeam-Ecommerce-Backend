import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import './AddProduct.css';

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');

  const handleImageClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Limit to image files
    fileInput.addEventListener('change', (e) => {
      const selectedFile = (e.target as HTMLInputElement).files?.[0]; // Get the selected file
      if (selectedFile) {
        // You can now handle the selected image file (e.g., upload it)
      }
    });
    fileInput.click();
  };

  const handleAddClick = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting

    if (!productName || !productPrice || !productDescription) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new product object
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription,
      // Add other properties as needed
    };

    // Call a function to add the product (you need to implement this function)
    // addProduct(newProduct);

    // Optionally, clear the form fields
    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-left ion-text-bold title-left">Add Product</IonTitle>
          <IonButtons slot="end">
            <Link to="/" className='tabs'>
              <IonButton>
                Home
              </IonButton>
            </Link>
            <Link to="/product" className='tabs'>
              <IonButton>
                Products
              </IonButton>
            </Link>
            <Link to="/orders" className='tabs'>
              <IonButton>
                Orders
              </IonButton>
            </Link>
            <Link to="/cart" className='tabs'>
              <IonButton>
                Cart
              </IonButton>
            </Link>
            <Link to="/login" className='tabs'>
              <IonButton>
                Login
              </IonButton>
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content Area */}
      <IonContent fullscreen>
        <main>
          <div>
            <form onSubmit={handleAddClick}>
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
              <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              ></textarea>

              <div onClick={handleImageClick} className="photo-template">
                {/* Placeholder for photo */}
                Click here to upload a photo
              </div>

              <button type="submit" className="add-button">
                Add
              </button>

              <Link to="/home" className='cancel-button'>
                Cancel
              </Link>
            </form>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default AddProduct;