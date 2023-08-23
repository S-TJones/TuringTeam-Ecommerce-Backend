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
import './UpdateProduct.css';
import products from '../components/ProductsData';

const UpdateProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(product => product.id === parseInt(productId, 10));

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price.toFixed(2));
      setDescription(product.description);
      setImage(product.image);
    }
  }, [product]);

  const handleSave = () => {
    // Logic to update product data
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
          <div className="update-product-header">
            <h2>Update Product</h2>
          </div>
          <IonCard className="update-product-card">
            <IonCardContent>
              <IonLabel>Title:</IonLabel>
              <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />

              <IonLabel>Price:</IonLabel>
              <IonInput type="number" value={price} onIonChange={e => setPrice(e.detail.value!)} />

              <IonLabel>Description:</IonLabel>
              <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)} />

              <IonLabel>Image URL:</IonLabel>
              <IonInput value={image} onIonChange={e => setImage(e.detail.value!)} />

              <IonImg src={image} className="product-image" />
              <div className="buttons-container">
    <IonButton expand="full" color="primary" onClick={handleSave} className="save-button">
      Save
    </IonButton>
    <IonButton expand="full" color="danger" onClick={handleDelete} className="delete-button">
      Delete
    </IonButton>
  </div>
            </IonCardContent>
            
          </IonCard>
      
        </main>

        <footer>
          <p>TuringTeam &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProduct;
