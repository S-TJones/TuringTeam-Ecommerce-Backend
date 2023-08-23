import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,IonButtons} from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import logoImage from '../images/img1.jpeg'; // Import your logo image
import './UserList.css';
import users from '../components/UsersData';




// The replaceable components. Obv we replace this with the data from database but example page



const UserList: React.FC = () => {
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
          <Link to="/login">
            <IonButton>Login</IonButton>
          </Link>
        </IonButtons>
      </IonToolbar>
    </IonHeader>


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
                <Link to={`/edit-user/${user.id}`} key={user.id}> {/* Link to the EditUserForm */}
                <IonButton className="edit-button" fill="clear">Edit</IonButton>
                </Link>
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
