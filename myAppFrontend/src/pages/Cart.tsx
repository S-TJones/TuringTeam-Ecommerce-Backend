import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonSelectOption,  IonItem, IonLabel, IonSelect, IonGrid, IonRow, IonCol,  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './styles/Cart.css';
import items from '../components/ItemsData';
import { useParams } from 'react-router-dom';


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
          <IonTitle className="ion-text-left ion-text-bold title left">Turing's Shop</IonTitle>
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
          <IonButton className="chekout-button" fill="clear" href= "/checkout">Checkout</IonButton>
        </main>
        {/* Footer */}
        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
      
      </IonContent>
    </IonPage>
  );
}

export default Cart;
