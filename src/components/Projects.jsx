import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { db } from "../services/firebase"; // Import Firebase instance
import { collection, getDocs } from "firebase/firestore";

const categories = ["Wires", "Motors", "Stationery", "Others"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products by category and search query
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      {/* Search Input */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex">
        {/* Sidebar Filter */}
        <div className="w-1/6 p-4 bg-gray-100 border-r">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <ul>
            <li
              className={`cursor-pointer p-2 ${
                selectedCategory === "All" ? "font-bold" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div className="flex-1 bg-white p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-full object-cover group-hover:opacity-75"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      Rs. {product.price}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
