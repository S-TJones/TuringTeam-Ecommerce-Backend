import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './UserList.css';



// The replaceable components. Obv we replace this with the data from database but example page
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more user data here
];


const UserList: React.FC = () => {
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
        {/* ... (header and other code) */}
        <main className="user-list">
          <h2 className="user-list-header">Users</h2>
          <div className="user-cards">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-card-row">
                  <span className="user-label">ID:</span>
                  <span className="user-info">{user.id}</span>
                </div>
                <div className="user-card-row">
                  <span className="user-label">Name:</span>
                  <span className="user-info">{user.name}</span>
                </div>
                <div className="user-card-row">
                  <span className="user-label">Email:</span>
                  <span className="user-info">{user.email}</span>
                </div>
                <IonButton className="edit-button" fill="clear">Edit</IonButton>
              </div>
            ))}
          </div>
        </main>
        {/* Footer */}
        <footer>
          <p>TuringTeam &copy</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default UserList;
