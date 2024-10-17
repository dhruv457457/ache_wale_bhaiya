import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase'; // Adjust the import path as necessary

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'product', productId);
        const docSnap = await getDoc(docRef);

        console.log('Fetching product with ID:', productId); // Log the ID being fetched

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({ id: docSnap.id, ...data });
          setSelectedImage(data.images[0]); // Set the first image as default
        } else {
          console.error('No such document!'); // Log if document doesn't exist
          setProduct(null); // Set product to null if not found
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error); // Log any error that occurs
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error if no product found
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <img src={selectedImage} alt={product.title} />
      </div>
      <div>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
      <div>
        <h2>Images</h2>
        <div>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product image ${index + 1}`}
              onClick={() => setSelectedImage(image)} // Update selected image on click
              style={{ cursor: 'pointer', width: '100px', margin: '10px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
