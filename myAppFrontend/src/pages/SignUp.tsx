import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './SignUp.css';

const SignUp: React.FC = () => {
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
          <IonTitle className="ion-text-left ion-text-bold" title-left>Turing's Shop</IonTitle>
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

      {/* Content Area */}
      <IonContent fullscreen>
        {/* Main Content */}
        <main className="ion-padding">
          <div className="login-container">
            {/* Image */}
            <div className="image-container">
              <img src="src/images/img1.jpeg" alt="Big Image" />
            </div>

            {/* Login Form */}
            <div className="login-form-container">
              <h2>Sign Up</h2>
              
              {/* Login Form */}
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" />
                </div>
                
                <button type="button" >SignUp</button>
              </form>
            </div>
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

export default SignUp;
