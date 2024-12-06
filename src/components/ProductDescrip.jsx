import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { db } from "../services/firebase";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";

function ProductDescrip() {
  const location = useLocation();
  const { product } = location.state || {}; // Access the passed product details

  // Log the location state to debug
  useEffect(() => {
    console.log("Location state:", location.state);
    if (!product) {
      console.error("No product data found in location.state");
    } else {
      console.log("Product data:", product);
    }
  }, [product]);

  // Default values if product data is not provided
  const defaultRating = 4.3;
  const defaultRatingCount = 100;

  const rating = product?.rating || defaultRating;
  const ratingCount = product?.ratingCount || defaultRatingCount;

  const [showSellerDetails, setShowSellerDetails] = useState(false);
  const sellerDetails = {
    name: "AcheWaleBhaiya",
    phone: "+91 67****79",
    email: "ache_wale_bhaiya@gmail.com",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product) {
      alert("Product not found.");
      return;
    }

    try {
      // Log the fetched product to check if the correct data is fetched
      console.log("Fetched product:", product);

      // Ensure product data exists
      const productRef = doc(db, "product", product.id); // Use the product ID to fetch from Firestore
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        const productData = productSnap.data();
        console.log("Product data:", productData);

        // Ensure stock is available and check its type
        const currentStock = productData?.Stock;

        if (typeof currentStock !== "number" || currentStock <= 0) {
          alert("Stock is zero or invalid. Unable to place order.");
          return;
        }

        // Save order details to Firestore
        const ordersCollection = collection(db, "orders");
        await addDoc(ordersCollection, {
          ...userDetails,
          product: {
            name: product.name,
            price: product.price,
            description: product.description,
          },
          timestamp: new Date(),
        });

        // Update stock by decrementing it
        await updateDoc(productRef, { Stock: currentStock - 1 });

        alert("Order placed successfully!");
        setUserDetails({ name: "", email: "", phone: "" });
        setIsModalOpen(false);
      } else {
        console.log("Product not found in Firestore.");
        alert("Product not found.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Card */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white shadow-lg rounded-lg border-2 border-gray-300 overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-auto object-contain"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                  {product.name}
                </h2>
                <p className="text-xl font-semibold text-gray-900">
                  Rs. {product.price}
                </p>
                <p className="mt-2 text-gray-600">
                  {product.description || "No description available."}
                </p>

                {/* Ratings Section */}
                <div className="mt-4 flex items-center">
                  <span className="text-yellow-500 font-bold">{rating} ★</span>
                  <span className="ml-2 text-gray-600">
                    ({ratingCount} ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Product Specifications
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Material: {product.Material || "N/A"}</li>
                <li>Dimensions: {product.Dimensions || "N/A"}</li>
                <li>Weight: {product.Weight || "N/A"}</li>
                <li>Warranty: {product.Warranty || "N/A"}</li>
                <li>Color: {product.Color || "N/A"}</li>
                <li>Features: {product.Features || "N/A"}</li>
                <li>Stock: {product.Stock || "N/A"}</li>
              </ul>
              <button
                onClick={() => setShowSellerDetails(!showSellerDetails)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition mb-4"
              >
                {showSellerDetails ? "Hide Seller Details" : "Contact Seller"}
              </button>

              {/* Seller Details Section */}
              {showSellerDetails && (
                <div className="mt-4 p-4 border rounded-md border-gray-300 bg-gray-100">
                  <h4 className="font-semibold text-gray-800">
                    Seller Details:
                  </h4>
                  <p>
                    <strong>Name:</strong> {sellerDetails.name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {sellerDetails.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {sellerDetails.email}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons on Right */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => alert("Added to cart!")}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for User Details */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h3 className="text-lg font-semibold mb-4">Enter Your Details</h3>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </label>
              <label className="block mb-2">
                Phone:
                <input
                  type="tel"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </label>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescrip;
