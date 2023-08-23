import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// The replaceable components

const UpdateProduct: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  // Fetch the product data by ID when the component mounts
  useEffect(() => {
    // Implement logic to fetch product details by ID and update 'product' state
    // Example:
    // fetchProductDetails(id).then((data) => setProduct(data));
  }, [id]);

  const handleEdit = () => {
    // Implement logic to send edited product data to the backend
    // Example:
    // editProduct(id, product).then(() => {
    //   // Redirect or show a success message
    // });
  };

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
            <h1>Edit Product</h1>
            <input
              type="text"
              placeholder="Name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
            />
            <textarea
              placeholder="Description"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
            />
            <button onClick={handleEdit}>Save Changes</button>

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

export default UpdateProduct;
