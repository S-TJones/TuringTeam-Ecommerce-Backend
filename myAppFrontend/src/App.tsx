import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import Status from './pages/Status';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

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

        {/* Routing for the Status */}
        <Route exact path="/status">
          <Status />
        </Route>
        {/* Routing for the Signup */}
        <Route exact path="/signup">
          <SignUp />
        </Route>
        {/* Routing for the Login */}
        <Route exact path="/login">
          <Login />
        </Route>
        {/* Routing for the Product List */}
        <Route exact path="/products">
          <Products />
        </Route>
        
        {/* Routing for Product Details */}
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
