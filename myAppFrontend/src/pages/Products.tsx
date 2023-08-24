import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonSelectOption,  IonItem, IonLabel, IonSelect, IonGrid, IonRow, IonCol,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './Products.css';
import products from '../components/ProductsData';

// The replaceable components



const Products: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          {/* Add image to the far right */}
          <div slot="start">
            <img src={logoImage} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </div>
          
          {/* Title in the center */}
          <IonTitle className="ion-text-left ion-text-bold title left">Turing's Shop</IonTitle>
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
        <h2 className="products-heading">Products Offered</h2>
        <div className="products-list">
      {products.map((product) => (
      <Link to={`/products/${product.id}`} key={product.id} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className='mobile-hide'>{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  ))}
</div>
        </main>

        {/* Footer */}
        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
    
      </IonContent>
    </IonPage>
  );
};

export default Products;

