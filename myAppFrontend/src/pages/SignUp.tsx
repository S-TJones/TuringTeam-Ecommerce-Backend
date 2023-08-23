import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './styles/signup.css';

import React, { useState, useEffect } from 'react';

// The replaceable components

const SignUp: React.FC = () => {

  const [formFields, setFormFields] = useState({});

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    
  }, []);

  const handleSignup = async () => {
    // Create a JSON object with the user's signup data
    const userData = {
      firstName,
      lastName,
      email,
      password,
      retypePassword,
    };

    // Make a fetch request to your server endpoint
    await fetch('http://127.0.0.1:5000/api/v1/sign-up')
    .then((response) => response.json())
    .then((data:any) => {
      // Extract the CSRF token from the HTML response
      setCsrfToken( data.token );
      console.log("TOKEN=="+data.token);

      // Send a POST request to your Flask signup route
      fetch('http://127.0.0.1:5000/api/v1/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': data.token, // Include the CSRF token in the headers
        },
        body: JSON.stringify(userData),
        // mode: 'no-cors'
      })
      .then((response) => {
        console.error("Res: "+response.status);

        if (response.ok || response.status==201) {
          // Signup succeeded
          // Redirect the user to the login page or a success page
          // window.location.href = '/login'; // Example redirection
          console.log('Signup success');

        } else {
          // Signup failed
          // Handle error or show an error message to the user
          console.error('Signup failed');
        }
      })
      .then((data:any) => {
        console.log(data);

      })
      .catch((error) => {
        console.error('Error during signup:', error);
        // Handle network errors or other issues
      });
    })
    .catch((error) => {
      console.error('Error:', error);
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
            <h1>Signup</h1>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className='nameField'
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
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

export default SignUp;
