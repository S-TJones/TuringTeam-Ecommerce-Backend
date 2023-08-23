import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState, useEffect } from 'react';

const Status: React.FC = () => {
  const [status, setStatus] = useState<string>(''); // Initialize with an empty string

  // Use the useEffect hook to fetch the status from the Flask backend
  useEffect(() => {
    // Fetch the status from your Flask backend
    fetch('http://127.0.0.1:5000/api/v1/status')
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved status in the component's state
        setStatus(data.message);
      })
      .catch((error) => {
        console.error('Error fetching status:', error);
        // Handle network errors or other issues
      });
  }, []);

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
            <h1>Status Page</h1>
            <p>Status from Flask Backend: {status}</p>
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

export default Status;
