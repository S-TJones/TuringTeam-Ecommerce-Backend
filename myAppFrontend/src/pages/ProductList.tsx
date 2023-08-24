import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg';
import './ProductList.css';
import products from '../components/ProductsData';

const ProductList: React.FC = () => {
    
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
        <main className="product-list-container">
          <h2 className="product-list-heading">Product List</h2>
          <Link to="/addproduct">
            <IonButton className="add-product-button">Add Product</IonButton>
          </Link>
          <div className="product-cards">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p className="product-description">{product.description.substring(0, 50)}...</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
                <Link to={`/edit-product/${product.id}`} className="edit-button">
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </main>
        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default ProductList;
