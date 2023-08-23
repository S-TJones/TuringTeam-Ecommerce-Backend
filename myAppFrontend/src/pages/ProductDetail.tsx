import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons  } from '@ionic/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import logoImage from '../images/img1.jpeg'; // Import your logo image
import './ProductDetail.css';
// The replaceable components

const ProductDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL parameter

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          {/* Add image to the far right */}
          <div slot="start">
            <img src={logoImage} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </div>
          
          {/* Title in the center */}
          <IonTitle className="ion-text-center ion-text-bold">Turing's Shop</IonTitle>
          <IonButtons slot="end">
          <Link to="/">
            <IonButton>
              Home
            </IonButton>
          </Link>
          <Link to="/product">
            <IonButton>
              Products
            </IonButton>
          </Link>
          <Link to="/login">
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
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      {/* Display other product details here */}
    </div>

        </main>

        {/* Footer */}
        <footer>
          <p>TuringTeam &copy</p>
        </footer>
    
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
