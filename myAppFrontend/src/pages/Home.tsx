import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

// The replaceable components
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
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
            <h1>Home Page</h1>

            {/* Links to other pages */}
            <IonRouterLink routerLink="/about">Go to About</IonRouterLink>
            <IonRouterLink routerLink="/products">Go to Products</IonRouterLink>
            <IonRouterLink routerLink="/status">Go to Status</IonRouterLink>
            <IonRouterLink routerLink="/login">Go to Login</IonRouterLink>
            <IonRouterLink routerLink="/signup">Go to Sign Up</IonRouterLink>
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

export default Home;
