import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../services/firebase'; // Import Firestore instance

const AdminPanel = () => {
  // State to hold form input values including id
  const [product, setProduct] = useState({
    id: '', // Adding id field
    name: '',
    price: '',
    description: '',
    condition: '',
    highlights: '',
    images: '',
    seller: ''
  });
  const [products, setProducts] = useState([]); // State for all products

  // Fetch Products from Firestore
  const fetchProducts = async () => {
    const productCollection = collection(db, "product");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
  };

  // Fetch products initially
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  // Add new product to Firestore
  const addProduct = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading page

    try {
      await addDoc(collection(db, "product"), {
        id: product.id,  // Adding id to the product document
        name: product.name,
        price: Number(product.price),
        description: product.description,
        condition: product.condition,
        highlights: product.highlights.split(","),
        images: product.images.split(",").map(img => ({ src: img.trim(), alt: 'Product Image' })),
        seller: product.seller
      });

      alert('Product added successfully!');
      fetchProducts(); // Refresh the product list after adding
      setProduct({ id: '', name: '', price: '', description: '', condition: '', highlights: '', images: '', seller: '' }); // Clear form including id
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  // Delete a product
  const deleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, "product", productId));
      alert('Product deleted successfully!');
      fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      {/* Form to Add New Product */}
      <form onSubmit={addProduct} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product ID</label>
          <input type="text" name="id" value={product.id} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input type="number" name="price" value={product.price} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea name="description" value={product.description} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Condition</label>
          <input type="text" name="condition" value={product.condition} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Highlights (comma separated)</label>
          <input type="text" name="highlights" value={product.highlights} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Images (comma separated URLs)</label>
          <input type="text" name="images" value={product.images} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Seller</label>
          <input type="text" name="seller" value={product.seller} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Product</button>
      </form>

      {/* Display List of Products */}
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <strong className="text-lg">{product.name}</strong> - ₹{product.price} <br />
            <span className="text-gray-600">ID:</span> {product.id} <br />
            <span className="text-gray-600">Description:</span> {product.description} <br />
            <span className="text-gray-600">Seller:</span> {product.seller} <br />
            <button onClick={() => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
