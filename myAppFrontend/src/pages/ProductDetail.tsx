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
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(product => product.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
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
                <img src={product.image} alt={product.title} className="product-image" />
              </IonCardHeader>
              <IonCardContent className="product-details">
                <div className="product-info">
                  <IonCardTitle>{product.title}</IonCardTitle>
                  <p className="product-price">${product.price.toFixed(2)}</p>
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
