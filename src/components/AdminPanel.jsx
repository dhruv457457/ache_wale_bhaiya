import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../services/firebase"; // Import Firestore instance

const AdminPanel = () => {
  // State to hold form input values including id
  const [product, setProduct] = useState({
    id: "", // Adding id field
    name: "",
    price: "",
    description: "",
    condition: "",
    highlights: "",
    images: "",
    seller: "",
    Material: "",
    Dimensions: "",
    Weight: "",
    Warranty: "",
    Color: "",
    Features: "",
  });
  const [products, setProducts] = useState([]); // State for all products
  const [orders, setOrders] = useState([]); // State for all orders

  // Fetch Orders from Firestore
  const fetchOrders = async () => {
    const ordersCollection = collection(db, "orders");
    const ordersSnapshot = await getDocs(ordersCollection);
    const ordersList = ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOrders(ordersList);
  };

  // Fetch orders initially
  useEffect(() => {
    fetchOrders();
  }, []);

  // Delete an order
  const deleteOrder = async (orderId) => {
    try {
      await deleteDoc(doc(db, "orders", orderId));
      alert("Order deleted successfully!");
      fetchOrders(); // Refresh the order list after deletion
    } catch (error) {
      console.error("Error deleting order: ", error);
    }
  };

  // Fetch Products from Firestore
  const fetchProducts = async () => {
    const productCollection = collection(db, "product");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => ({
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
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Add new product to Firestore
  const addProduct = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading page

    try {
      await addDoc(collection(db, "product"), {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        description: product.description,
        condition: product.condition,
        highlights: product.highlights.split(","),
        images: product.images
          .split(",")
          .map((img) => ({ src: img.trim(), alt: "Product Image" })),
        seller: product.seller,
        Material: product.Material,
        Dimensions: product.Dimensions,
        Weight: product.Weight,
        Warranty: product.Warranty,
        Color: product.Color,
        Features: product.Features,
        Stock: Number(product.Stock), // Ensure numeric values for fields like Stock
      });

      alert("Product added successfully!");
      fetchProducts(); // Refresh the product list after adding
      setProduct({
        id: "",
        name: "",
        price: "",
        description: "",
        condition: "",
        highlights: "",
        images: "",
        seller: "",
        Material: "",
        Dimensions: "",
        Weight: "",
        Warranty: "",
        Color: "",
        Features: "",
        Stock: "",
    });
     // Clear form including id
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  // Delete a product
  const deleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, "product", productId));
      alert("Product deleted successfully!");
      fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
        Product & Order Management
      </h1>

      {/* Form to Add New Product */}
      <form
        onSubmit={addProduct}
        className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Add New Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Product ID", name: "id", type: "text" },
            { label: "Product Name", name: "name", type: "text" },
            { label: "Price", name: "price", type: "number" },
            { label: "Condition", name: "condition", type: "text" },
            { label: "Seller", name: "seller", type: "text" },
            { label: "Highlights", name: "highlights", type: "text" },
            { label: "Images", name: "images", type: "text" },
            { label: "Material", name: "Material", type: "text" },
            { label: "Dimensions", name: "Dimensions", type: "text" },
            { label: "Weight", name: "Weight", type: "text" },
            { label: "Warranty", name: "Warranty", type: "text" },
            { label: "Color", name: "Color", type: "text" },
            { label: "Features", name: "Features", type: "text" },
            { label: "Stock", name: "Stock", type: "number" },
          ].map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={product[field.name]}
                onChange={handleInputChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
          <div className="col-span-2 md:col-span-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              rows="3"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>
      {/* Order List */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Order List
        </h2>
        {orders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-6 bg-white border border-gray-300 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  Order ID: {order.id}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Customer:</span> {order.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> {order.email}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> {order.phone}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Product:</span>{" "}
                  {order.product?.name || "N/A"} - ₹
                  {order.product?.price || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Order Time:</span>{" "}
                  {new Date(order.timestamp?.seconds * 1000).toLocaleString()}
                </p>
                <button
                  onClick={() => deleteOrder(order.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition"
                >
                  Delete Order
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No orders available.</p>
        )}
      </div>
      {/* Product List */}
      <div className="mb-10 mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Product List
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-6 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">ID:</span> {product.id}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Price:</span> ₹{product.price}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Description:</span>{" "}
                {product.description}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Seller:</span> {product.seller}
              </p>
              <button
                onClick={() => deleteProduct(product.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition"
              >
                Delete Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
