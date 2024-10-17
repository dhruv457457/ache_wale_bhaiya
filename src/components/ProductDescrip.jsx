// ProductDescrip.js
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function ProductDescrip() {
  const location = useLocation();
  const { product } = location.state || {}; // Access the passed product details

  // Default values if product data is not provided
  const defaultRating = 4.3; // Default rating
  const defaultRatingCount = 100; // Example default rating count

  // Use default values if product data is missing
  const rating = product?.rating || defaultRating;
  const ratingCount = product?.ratingCount || defaultRatingCount;

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Card */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white shadow-lg rounded-lg border-2 border-gray-300 overflow-hidden"> {/* Increased border size */}
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-auto object-contain"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h2>
                <p className="text-xl font-semibold text-gray-900">Rs. {product.price}</p>
                <p className="mt-2 text-gray-600">{product.description || "No description available."}</p>

                {/* Ratings Section */}
                <div className="mt-4 flex items-center">
                  <span className="text-yellow-500 font-bold">{rating} ★</span>
                  <span className="ml-2 text-gray-600">({ratingCount} ratings)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="md:w-1/2 p-4 flex flex-col justify-between"> {/* Flex container */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Product Specifications</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Material: {product.material || "N/A"}</li>
                <li>Dimensions: {product.dimensions || "N/A"}</li>
                <li>Weight: {product.weight || "N/A"}</li>
                <li>Warranty: {product.warranty || "N/A"}</li>
                <li>Color: {product.color || "N/A"}</li> {/* Added specification */}
                <li>Battery Life: {product.batteryLife || "N/A"}</li> {/* Added specification */}
                <li>Features: {product.features ? product.features.join(', ') : "N/A"}</li> {/* Added specification */}
              </ul>
              <button
                onClick={() => alert("Contacting seller...")} // Placeholder for contact action
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition mb-4"
              >
                Contact Seller
              </button>
            </div>

            {/* Action Buttons on Right */}
            <div className="flex justify-end space-x-4"> {/* Align buttons to the right */}
              <button
                onClick={() => alert("Added to cart!")} // Placeholder action
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => alert("Proceeding to buy!")} // Placeholder action
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescrip;
