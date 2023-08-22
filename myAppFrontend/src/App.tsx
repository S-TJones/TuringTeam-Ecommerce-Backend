import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

/* Importing Page Routing*/
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import SignUp from './pages/SignUp';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonRouterOutlet id='main'>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        {/* Routing for the Product List */}
        <Route exact path="/products">
          <ProductList />
        </Route>
        
        {/* Routing for Product Details */}
        <Route path="/products/:id">
          <ProductDetails />
        </Route>

        {/* Routing for the Login Page */}
        <Route exact path="/Login">
          <Login />
        </Route>

        {/* Routing for the Login Page */}
        <Route exact path="/SignUp">
          <SignUp />
        </Route>

        {/* Routing for the Addproduct page */}
        <Route exact path="/AddProduct">
          <AddProduct/>
        </Route>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;