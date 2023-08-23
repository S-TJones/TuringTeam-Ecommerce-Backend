import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import logoImage from '../images/img1.jpeg';
import './UpdateUser.css';
import users from '../components/UsersData';

// The replaceable components

const UpdateUser: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState(users.find(u => u.id.toString() === userId));

  useEffect(() => {
    setUser(users.find(u => u.id.toString() === userId));
  }, [userId]);

  const handleSave = () => {
    // Logic to update user data
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div slot="start">
            <img src={logoImage} alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </div>
          <IonTitle className="ion-text-center ion-text-bold">Turing's Shop</IonTitle>
          <IonButtons slot="end">
            <Link to="/">
              <IonButton>Home</IonButton>
            </Link>
            <Link to="/productlist">
              <IonButton>Products</IonButton>
            </Link>
            <Link to="/userlist">
              <IonButton>Users</IonButton>
            </Link>
            <Link to="/login">
              <IonButton>Login</IonButton>
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content Area */}
      <IonContent fullscreen>
        {/* Main Content - Switchable Components */}
        <main className="update-user-container">
          <IonCard className="update-user-card">
            <IonCardHeader>
              <IonCardTitle className="update-user-title">Update User</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <form>
                <IonLabel>Name:</IonLabel>
                <IonInput value={user.name} />

                <IonLabel>Email:</IonLabel>
                <IonInput value={user.email} />

                <IonLabel>Role:</IonLabel>
                <IonSelect value={user.role}>
                  <IonSelectOption value="User">User</IonSelectOption>
                  <IonSelectOption value="Admin">Admin</IonSelectOption>
                </IonSelect>

                <div className="button-container">
                  <IonButton expand="full" onClick={handleSave} className="save-button">
                    Save
                  </IonButton>
                  <IonButton expand="full" className="cancel-button">
                    Cancel
                  </IonButton>
                </div>
              </form>
            </IonCardContent>
          </IonCard>
        </main>

        {/* Footer */}
        <footer>
          <p>TuringTeam &copy;</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default UpdateUser;
