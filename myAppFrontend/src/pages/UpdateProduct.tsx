import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonLabel,
  IonInput,
  IonImg
} from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import logoImage from '../images/img1.jpeg';
import './styles/UpdateProduct.css';
import products from '../components/ProductsData';
import Product from '../types/Product';

// The replaceable components

const UpdateProduct: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null); // Use the Product type as the state type

  // Fetch the product data by ID when the component mounts
  useEffect(() => {
    // Implement logic to fetch product details by ID and update 'product' state
    // Example:
    fetch(`http://127.0.0.1:5000/api/v1/products/${id}`)
    .then((response) => response.json())
    .then((data: Product) => {
      console.log(data);
      setProduct(data);
    })
    .catch((error: any) => {
      // Handle errors
      console.log(error);
    });
  }, [id]);
  
  const handleSave = () => {
    // Logic to update product data
    // Implement logic to send edited product data to the backend
    // Example:
    // editProduct(id, product).then(() => {
    //   // Redirect or show a success message
    // });
  };

  const handleDelete = () => {
    // Logic to delete product
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div slot="start">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </div>
          <IonTitle className="ion-text-center ion-text-bold">Turing's Shop</IonTitle>
          <IonButtons slot="end">
            <Link to="/">
              <IonButton>Home</IonButton>
            </Link>
            <Link to="/productlist">
              <IonButton>Products</IonButton>
            </Link>
            <Link to="/login">
              <IonButton>Login</IonButton>
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <main>
          <IonCard className="update-product-card">
            <IonCardContent>
              <IonLabel>Name:</IonLabel>
              {/* <IonInput value={product.name} onChange={(e) => setProduct({ ...product, name: e.detail.value! })} /> */}
              <input
                type="text"
                placeholder="Name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
              />

              <IonLabel>Price:</IonLabel>
              {/* <IonInput type="number" value={product.price} onIonChange={e => setPrice(e.detail.value!)} /> */}
              <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
              />

              <IonLabel>Description:</IonLabel>
              {/* <IonInput value={product.description} onIonChange={e => setDescription(e.detail.value!)} /> */}
              <textarea
                placeholder="Description"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
              />

              <IonLabel>Image URL:</IonLabel>
              {/* <IonInput value={product.image} onIonChange={e => setImage(e.detail.value!)} /> */}
              <input
                type="text"
                placeholder="Image URL"
                value={product.image}
                onChange={(e) => setProduct({ ...product, image: e.target.value })}
              />

              <IonImg src={product.image} className="product-image" />
              <div className="buttons-container">
              </div>
            </IonCardContent>
          </IonCard>

          <IonButton expand="full" color="primary" onClick={handleSave} className="save-button">Save</IonButton>
          <IonButton expand="full" color="danger" onClick={handleDelete} className="delete-button">Delete</IonButton> 
        </main>

        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProduct;