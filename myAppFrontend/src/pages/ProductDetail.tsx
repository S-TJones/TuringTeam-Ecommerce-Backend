import React from 'react';
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
  IonCardHeader,
  IonCardTitle,
  IonSelect,
  IonSelectOption,
  IonLabel
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import products from '../components/ProductsData';
import logoImage from '../images/img1.jpeg';
import './styles/ProductDetail.css';

import { useEffect, useState } from 'react';
import Product from '../types/Product';
import { fetchProductDetails } from '../services/productService';

// The replaceable components

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null); // Use the Product type as the state type

  useEffect(() => {
    // Make a GET request to fetch products
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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Add image to the far left */}
          <div slot="start">
            <img src={logoImage} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </div>
          
          {/* Title in the center */}
          <IonTitle className="ion-text-left ion-text-bold title-left">Turing's Shop</IonTitle>
          <IonButtons slot="end">
            <Link to="/" className='tabs'>
              <IonButton>
                Home
              </IonButton>
            </Link>
            <Link to="/products" className='tabs'>
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

      <IonContent fullscreen>
        <main>
          <div className="product-card-container">
            <IonCard className="product-card">
              <IonCardHeader>
                <img src={product.image} alt={product.name} className="product-image" />
              </IonCardHeader>
              <IonCardContent className="product-details">
                <div className="product-info">
                  <IonCardTitle>{product.name}</IonCardTitle>
                  <p className="product-price">${product.price}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="quantity-container">
                    <IonLabel className="quantity-label">Quantity:</IonLabel>
                    <IonSelect className="quantity-select">
                      <IonSelectOption value="1">1</IonSelectOption>
                      <IonSelectOption value="2">2</IonSelectOption>
                      <IonSelectOption value="3">3</IonSelectOption>
                    </IonSelect>
                  </div>
                  <Link to="/cart" className="add-to-cart-link">
                    <IonButton expand="full" color="primary" className="add-to-cart-button">
                      Add to Cart
                    </IonButton>
                  </Link>
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </main>

        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
