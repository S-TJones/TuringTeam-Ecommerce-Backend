import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonSelectOption,  IonItem, IonLabel, IonSelect, IonGrid, IonRow, IonCol,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './Cart.css';


// The replaceable components
const items = [
  { id: 1, name: 'Chair', price: 20.00, image: 'src/images/img1.jpeg', quantity: 1 },
  { id: 2, name: 'Backpack', price: 25.00, image: 'src/images/img1.jpeg', quantity: 2 },
  // Add more products as needed
];

const Cart: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
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
        <main>
          <h2 className="user-list-header">Cart</h2>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-image">
                <img src={item.image} alt="Product" />
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="product-price">${item.price.toFixed(2)}</div>
                <div className="quantity">
                  <label>Quantity</label>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          ))}
          <IonButton className="chekout-button" fill="clear">Checkout</IonButton>
        </main>
        {/* Footer */}
        <footer>
          <p>TuringTeam &copy</p>
        </footer>
      
      </IonContent>
    </IonPage>
  );
}

export default Cart;
