import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import React, { useEffect, useState } from 'react';
import Product from '../types/Product';
import { Link } from 'react-router-dom';

// The replaceable components

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Make a GET request to fetch products
    fetch('http://127.0.0.1:5000/api/v1/products')
    .then((response) => response.json())
    .then((data:any) => {
      console.log(data);
      setProducts(data.result);
    })
    .catch((error) => {
      console.error(error);
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
            <h1>All Products</h1>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`}>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  {/* Render other product information as needed */}
                  </Link>
                </li>
              ))}
            </ul>
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

export default Products;
