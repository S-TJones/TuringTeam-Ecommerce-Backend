import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg';
import './OrderList.css';

const orders = [
  {
    id: 1,
    status: 'completed',
    items: 'Product A',
    amount: '$100',
  },
  {
    id: 2,
    status: 'pending',
    items: 'Product B',
    amount: '$50',
  },
  {
    id: 3,
    status: 'cancelled',
    items: 'Product C',
    amount: '$75',
  },
  // Add more orders here
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'green';
    case 'pending':
      return 'yellow';
    case 'cancelled':
      return 'red';
    default:
      return 'black';
  }
};

const OrderList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div slot="start">
            <img src={logoImage} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </div>
          <IonTitle className="ion-text-left ion-text-bold title-left">Turing's Shop</IonTitle>
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
          <div>
            <h2>Order List</h2>
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <Link to={`/orders/${order.id}`} className="order-link">
                    <div
                      className="status"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    ></div>
                    <div className="order-details">
                      <p>Order ID: {order.id}</p>
                      <p>Status: {order.status}</p>
                      <p>Item: {order.items}</p>
                      <p>Amount: {order.amount}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer>
          <p>The Turing Team &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default OrderList;
