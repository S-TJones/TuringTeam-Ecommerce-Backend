import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons  } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {

  const history = useHistory(); // Initialize useHistory

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
    // Perform your login logic here
    
    // If login is successful, navigate to /home
    history.push('/home');
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
          <IonTitle className="ion-text-center ion-text-bold">Turing's Shop</IonTitle>
          <IonButtons slot="end">
          <Link to="/">
            <IonButton>
              Home
            </IonButton>
          </Link>
          <Link to="/products">
            <IonButton>
              Products
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
              <h2>Login</h2>
              <p>Don't have an account yet? <a href="/SignUp">Sign up</a></p>
              
              {/* Login Form */}
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
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
