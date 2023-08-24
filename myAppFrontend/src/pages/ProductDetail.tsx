import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import React, { useEffect, useState } from 'react';
import Product from '../types/Product';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/productService';

// The replaceable components

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null); // Use the Product type as the state type

  useEffect(() => {
    // Make a GET request to fetch products
    fetch(`http://127.0.0.1:5000/api/v1/products/${id}`)
    .then((response) => response.json())
    .then((data: Product) => {
      console.log(data);

      setProduct(data);
    })
    .catch((error: any) => {
      // Handle errors
      console.log(error);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} />
            {/* <p>Date and Time: {product.created_at.toISOString()}</p> */}
            {/* Display other product details */}
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

export default ProductDetail;
