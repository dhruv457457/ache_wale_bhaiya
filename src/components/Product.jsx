import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const categories = ["Wires", "Motors", "Stationery", "Others"];

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "product"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          imageSrc: doc.data().images[0]?.src || '',
          imageAlt: doc.data().images[0]?.alt || 'Product Image',
        }));
        setProducts(productsData);
        setFilteredProducts(productsData); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on selected category or search query
  useEffect(() => {
    let updatedProducts = selectedCategory === "All" 
      ? products 
      : products.filter((product) => product.category === selectedCategory);

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, searchQuery, products]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col">
        {/* Search Input */}
        <div className="p-4 bg-gray-100 border-b">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex">
          {/* Sidebar Filter */}
          <div className="w-1/6 p-4 bg-gray-100 border-r">
            <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
            <ul>
              <li
                className={`cursor-pointer p-2 ${selectedCategory === "All" ? "font-bold" : ""}`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer p-2 ${selectedCategory === category ? "font-bold" : ""}`}
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
                  state={{ product }} // Pass the entire product object as state
                  className="group block bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
                  >
                  <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
    className="h-48 w-full object-cover group-hover:opacity-75"
  />
  <div className="p-4">
    <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
    <p className="mt-1 text-lg font-semibold text-gray-900">Rs. {product.price}</p>
  </div>
</Link>

                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
