import React from 'react';
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonSearchbar } from '@ionic/react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton} from '@ionic/react';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import homeImage from '../images/img2.jpg'; // Import your home image
import './styles/Home.css';
import ExploreContainer from '../components/ExploreContainer';
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';

const Home: React.FC = () => {
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
          
            {/* Links to other pages */}
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

      {/* Content Area */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Main Content - Switchable Components */}
        <main>
          <div>
            <p>Stop at Turing's Shop today! We have everything you may need!</p>
            
            {/* Image */}
            <img src={homeImage} className='mobile-hide' alt="home" style={{ maxWidth: '100%' }} />
            
            {/* "Start Shopping Now" button */}
            <IonButton color="primary" expand="full" href= "/products">
              Start Shopping Now
            </IonButton>
            
            {/* Add more content as needed */}
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

export default Home;
