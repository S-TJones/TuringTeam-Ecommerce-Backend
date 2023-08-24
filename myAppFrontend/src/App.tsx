import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import HomePage from './components/HomePage';
//import ProductList from './components/ProductList';

import ProductDetails from './components/ProductDetails';
/* Importing Page Routing*/
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import SignUp from './pages/SignUp';
import Status from './pages/Status';
import UserList from './pages/UserList';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import UpdateUser from './pages/UpdateUser';
import UpdateProduct from './pages/UpdateProduct';
import OrderList from './pages/OrderList';
import OrderDetails from './pages/OrderDetails';
import Checkout from './pages/Checkout';

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
    <meta name= "viewport" content = "width=device-width, initial-scale=1.0"/>
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

        {/* Routing for the Orders List */}
        <Route exact path="/orders">
          <OrderList />
        </Route>

        {/* Routing for the Order */}
        <Route exact path="/orders/:id">
          <OrderDetails />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>
        
        {/* Routing for Product Details */}
        <Route path="/products/:id">
          <ProductDetail />
        </Route>

        {/* Routing for the Add product page */}
        <Route exact path="/addproduct">
          <AddProduct/>
        </Route>

        {/* Routing for the user list page */}
        <Route exact path="/userlist">
          <UserList/>
        </Route>

        {/* Routing for the card page */}
        <Route exact path="/cart">
          <Cart/>
        </Route>
        
        {/* Routing for product details page for admin */}
      <Route exact path="/productlist">
          <ProductList/>
        </Route>

        {/* Routing for update user page */}
      <Route exact path="/edit-user/:userId">
          <UpdateUser/>
        </Route>

        {/* Routing for product edit page for admin */}
      <Route exact path="/edit-product/:productId">
          <UpdateProduct/>
        </Route>

      </IonRouterOutlet>

    </IonReactRouter>
    
  </IonApp>
);

export default App;
