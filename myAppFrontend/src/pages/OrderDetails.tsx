import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonSearchbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';

// The replaceable components

const OrderDetails: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
      <IonToolbar>
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

      {/* Content Area */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Main Content - Switchable Components */}
        <main>
          <div>
            <p>Some static content goes here...</p>
            
            {/* Add more content as needed */}
          </div>
        </main>

        {/* Footer */}
        <footer>
          <p>TuringTeam &copy</p>
        </footer>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default OrderDetails;
