import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import { Link, useParams } from 'react-router-dom';
import './styles/OrderDetails.css';


  
  const OrderDetails: React.FC = () => {
  // Get the order ID from the route params
  const { orderId } = useParams<{ orderId: string }>();

  // Replace this with actual order data retrieval logic, e.g., from an API or state management
  const order = {
    id: orderId,
    userId: '12345',
    total: '$100',
    summary: [
      { item: 'Product A', quantity: 2 },
      { item: 'Product B', quantity: 1 },
    ],
    billingAddress: {
      street: '123 Main St',
      city: 'Exampleville',
      state: 'CA',
      zip: '12345',
    },
  };

  const completeOrder = () => {
    // Add logic to mark the order as completed
    console.log('Order completed!');
  };

  const cancelOrder = () => {
    // Add logic to cancel the order
    console.log('Order canceled!');
  };

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <Link to="/orders" className='tabs'>
                <IonButton>
                  Back to Orders
                </IonButton>
              </Link>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {/* Main Content */}
          <main className="details">
            <h2>Order Details</h2>
            <div className="left-section">
              <p className="order-id">Order ID: {order.id}</p>
              <p>User ID: {order.userId}</p>
              <p>Total: {order.total}</p>
              <h3 className="billing-address">Billing Address</h3>
              <p>Street: {order.billingAddress.street}</p>
              <p>City: {order.billingAddress.city}</p>
              <p>State: {order.billingAddress.state}</p>
              <p>ZIP: {order.billingAddress.zip}</p>
            </div>
            <div className="right-section">
              <h3>Order Summary</h3>
              <ul>
                {order.summary.map((item, index) => (
                  <li key={index}>
                    {item.item} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="buttons">
            <IonButton onClick={completeOrder} expand="full" color="success">
              Complete Order
            </IonButton>
            <IonButton onClick={cancelOrder} expand="full" color="danger">
              Cancel Order
            </IonButton>
          </div>
          </main>
          <footer>
            <p>The Turing Team &copy;</p>
          </footer>
        </IonContent>
      </IonPage>
    );
  };
  
  export default OrderDetails;