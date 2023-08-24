import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonSelectOption, IonItem, IonLabel, IonSelect, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './Checkout.css'; // Import your CSS file
import items from '../components/ItemsData';
import { useParams } from 'react-router-dom';

const Checkout: React.FC = () => {
  // Replace this with actual cart data retrieval logic
  const cartItems = [
    {
      id: 1,
      name: 'Product A',
      image: 'product-a-image-url.jpg',
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product B',
      image: 'product-b-image-url.jpg',
      price: 30,
      quantity: 1,
    },
    // Add more items from the cart
  ];

  // Replace this with actual billing address data
  const billingAddress = {
    street: '123 Main St',
    city: 'Exampleville',
    state: 'CA',
    zip: '12345',
  };

  // Calculate sub-total, sales tax, and total
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const salesTaxRate = 0.1; // 10% sales tax rate
  const salesTax = subTotal * salesTaxRate;
  const total = subTotal + salesTax;

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

      <IonContent fullscreen>
        <main>
          <h2 className="checkout-header">Checkout</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="product-image">
                <img src={item.image} alt="Product" />
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="product-quantity">Quantity: {item.quantity}</div>
              </div>
            </div>
          ))}
          <div className="billing-address">
            <h2>Billing Address</h2>
            <p>Street: {billingAddress.street}</p>
            <p>City: {billingAddress.city}</p>
            <p>State: {billingAddress.state}</p>
            <p>ZIP: {billingAddress.zip}</p>
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <IonGrid>
              <IonRow>
                <IonCol>Sub-Total:</IonCol>
                <IonCol>${subTotal.toFixed(2)}</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Sales Tax ({(salesTaxRate * 100).toFixed(2)}%):</IonCol>
                <IonCol>${salesTax.toFixed(2)}</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Total:</IonCol>
                <IonCol>${total.toFixed(2)}</IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div className="checkout-button-container">
            <IonButton className="checkout-button" expand="full" color="success">
              Checkout
            </IonButton>
          </div>
        </main>
        {/* Footer */}
        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
}

export default Checkout;
