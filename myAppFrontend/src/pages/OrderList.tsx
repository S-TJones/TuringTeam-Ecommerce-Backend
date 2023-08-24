import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonSearchbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './OrderList.css';

// The replaceable components

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
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          {/* Add image to the far left */}
          <div slot="start">
            <img src={logoImage} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </div>
          
          {/* Title in the center */}
          <IonTitle className="ion-text-left ion-text-bold title-left">Turing's Shop</IonTitle>
          {/* Title in the center */}
          
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
        {/* Main Content */}
        <main>
          <div>
            <h2>Order List</h2>
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
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
                </li>
              ))}
            </ul>
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

export default OrderList;
