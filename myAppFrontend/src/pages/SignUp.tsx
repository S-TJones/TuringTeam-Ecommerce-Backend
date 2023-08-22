import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import ExploreContainer from '../components/ExploreContainer';
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
          <IonTitle className="ion-text-center ion-text-bold">Turing's Shop</IonTitle>
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
          <p>TuringTeam &copy;</p>
        </footer>

      </IonContent>
    </IonPage>
  );
};

export default SignUp;
