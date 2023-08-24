import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons  } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom'; // Import useHistory
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './styles/Login.css';

import { useState } from 'react';

// The replaceable components

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Create a JSON object with the user's credentials
    const credentials = {
      email,
      password,
    };

    // Send a POST request to your Flask authentication route
    fetch('http://127.0.0.1:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then((response) => {
      if (response.ok || response.status==201) {
        // Authentication succeeded
        // Redirect the user to the protected part of your app
        window.location.href = '/home'; // Example redirection
      } else {
        // Authentication failed
        // Handle error or show an error message to the user
        console.error('Incorrect email or password!');
      }
    })
    .then((data:any) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error during login:', error);
      // Handle network errors or other issues
    });
  };

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

      {/* Content Area */}
      <IonContent fullscreen>
        {/* Main Content */}
        <main className="ion-padding">
          <div className="login-container">
            {/* Image */}
            <div className="image-container">
              <img src="src/images/img1.jpeg" alt="Big Image"/>
            </div>

            {/* Login Form */}
            <div className="login-form-container">
              <h2>Login</h2>
              <p>Don't have an account yet? <a href="/SignUp">Sign up</a></p>
              
              {/* Login Form */}
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email" id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password" id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
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

export default Login;
