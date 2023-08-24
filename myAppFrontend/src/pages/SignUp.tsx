import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import { Link } from 'react-router-dom';
import './styles/SignUp.css';

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
          window.location.href = '/login'; // Example redirection
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
            <div className="image-container" >
              <img src="src/images/img1.jpeg" alt="Big Image" className='mobile-hide'/>
            </div>

            {/* Login Form */}
            <div className="login-form-container">
              <h2>Sign Up</h2>
              
              {/* Login Form */}
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text" id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text" id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email" id='email'
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
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password" id="confirmPassword"
                    placeholder="Confirm Password"
                    value={retypePassword}
                    onChange={(e) => setRetypePassword(e.target.value)}
                  />
                </div>
                <button type="button" onClick={handleSignup}>SignUp</button>
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
