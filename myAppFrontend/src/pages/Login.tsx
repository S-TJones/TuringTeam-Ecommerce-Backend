import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import React, { useState } from 'react';

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
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then((response) => {
      if (response.ok) {
        // Authentication succeeded
        // Redirect the user to the protected part of your app
        window.location.href = '/dashboard'; // Example redirection
      } else {
        // Authentication failed
        // Handle error or show an error message to the user
      }
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
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content Area */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Main Content - Switchable Components */}
        <main>
          <div>
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </main>

        {/* Footer */}
        <footer>
          <p>TuringTeam &copy</p>
        </footer>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;
