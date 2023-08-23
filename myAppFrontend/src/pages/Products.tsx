import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonSelectOption,  IonItem, IonLabel, IonSelect, IonGrid, IonRow, IonCol,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './Products.css';

// The replaceable components

const products = [
  {
      id: 1,
      title: 'Serene Chromatic Symphony',
      image: 'src/images/img1.jpeg',
      price: 55.09,
      description: "Experience the captivating world of Serene Chromatic Symphony."
  },
  {
      id: 2,
      title: 'Crimson Dreamscape: Whispers of the Scarlet Forest',
      image: 'src/images/img1.jpeg',
      price: 44.34,
      description: 'Step into the enchanting world of "Crimson Dreamscape' 
  },
  {
      id: 3,
      title: 'Starry Reverie: Celestial Whispers in Midnight Hues',
      image: 'src/images/img1.jpeg',
      price: 45.65,
      description: 'Behold the mesmerizing canvas of "Starry Reverie.'
  },
  {
      id: 4,
      title: "Eternal Harmony: Fusion of Nature and Technology",
      image: 'src/images/img1.jpeg',
      price: 3.45,
      description: 'Enter the realm of "Eternal Harmony," a visionary painting that encapsulates the seamless convergence of nature and technology.'
  },
  {
      id: 5,
      title: "Whispers of Time: A Journey Through Ancient Echoes",
      image: 'src/images/img1.jpeg',
      price: 54.67,
      description: 'Embark on a captivating journey through the corridors of history with "Whispers of Time"' 
  }

];


const Products: React.FC = () => {
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
        <h2 className="products-heading">Products Offered</h2>
        <div className="products-list">
      {products.map((product) => (
      <Link to={`/products/${product.id}`} key={product.id} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  ))}
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

export default Products;

