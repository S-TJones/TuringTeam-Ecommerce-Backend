import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonSelectOption,  IonItem, IonLabel, IonSelect, IonGrid, IonRow, IonCol,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './ProductList.css';


const ProductList: React.FC = () => {
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
                  <Link to="/item">
                    <IonButton>
                      items
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
            
            <IonContent fullscreen>






            {/* Footer */}
            <footer>
            <p>TuringTeam &copy</p>
            </footer>
      
            </IonContent>
    </IonPage>
  );
}

export default ProductList;
