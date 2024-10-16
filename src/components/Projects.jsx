
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";
const categories = ["Wires", "Motors", "Stationery", "Others"];
const products = [
  {
    id: 1,
    name: "Male Jumper Wires",
    category: "Electronics",
    href: "/products/jumper-wires",
    price: "Rs.50",
    imageSrc:
      "https://cdn.littlebird.com.au/images/files/000/056/706/large/SF-PRT-11709.jpg?1535768036",
    imageAlt: "Male jumper wires.",
  },
  {
    id: 2,
    name: "Female Jumper Wires",
    category: "Electronics",
    href: "/products/jumper-wires",
    price: "Rs.50",
    imageSrc:
      "https://cdn.littlebird.com.au/images/files/000/056/706/large/SF-PRT-11709.jpg?1535768036",
    imageAlt: "Female jumper wires.",
  },
  {
    id: 3,
    name: "Motor",
    category: "Motors",
    href: "/products/motor",
    price: "Rs.500",
    imageSrc:
      "https://images-cdn.ubuy.co.in/643d3af09995cb379d77cae1-6v-60rpm-micro-dc-gear-speed-reduction.jpg",
    imageAlt: "DC motor.",
  },
  {
    id: 4,
    name: "Focus Paper Refill",
    category: "Stationery",
    href: "/products/focus-paper-refill",
    price: "$89",
    imageSrc:
      "https://m.media-amazon.com/images/I/61bkyBbnBPL._AC_UF1000,1000_QL80_.jpg",
    imageAlt: "Focus paper refill.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    category: "Stationery",
    href: "/products/machined-mechanical-pencil",
    price: "$35",
    imageSrc:
      "https://harishprojects.com/cdn/shop/files/10-Core-Ribbon-Wire-Harish-Projects.webp?v=1718122135",
    imageAlt: "Mechanical pencil with brass tip.",
  },
  {
    id: 6,
    name: "Earthen Bottle",
    category: "Lifestyle",
    href: "/products/earthen-bottle",
    price: "$48",
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/51xA613taAL.AC_UL600_SR600,600.jpg",
    imageAlt: "Earthen bottle with cork stopper.",
  },
  {
    id: 7,
    name: "Nomad Tumbler",
    category: "Lifestyle",
    href: "/products/nomad-tumbler",
    price: "$35",
    imageSrc:
      "https://robu.in/wp-content/uploads/2015/10/pulley-wheel-1-500x5001.jpg",
    imageAlt: "Insulated tumbler.",
  },
  {
    id: 8,
    name: "Focus Paper Refill (Pack of 2)",
    category: "Stationery",
    href: "/products/focus-paper-refill-2",
    price: "$89",
    imageSrc: "https://m.media-amazon.com/images/I/51SGZaQY5dL.jpg",
    imageAlt: "Pack of Focus paper refills.",
  },
  {
    id: 9,
    name: "Machined Mechanical Pencil (Variant)",
    category: "Stationery",
    href: "/products/machined-mechanical-pencil-2",
    price: "$35",
    imageSrc:
      "https://probots.co.in/pub/media/catalog/product/cache/dae07e5368c25ed1643ed23ff1b30de1/p/r/promaxrockerswitchdpdtkcd4.jpg",
    imageAlt: "Another variant of mechanical pencil.",
  },
  {
    id: 10,
    name: "Jumper Wires",
    category: "Electronics",
    href: "/products/jumper-wires-2",
    price: "Rs.50",
    imageSrc:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/VY/DW/OA/69897210/steel-curtain-pipe-rod.jpg",
    imageAlt: "Another set of jumper wires.",
  },
  {
    id: 11,
    name: "Motor (Variant)",
    category: "Motors",
    href: "/products/motor-2",
    price: "Rs.500",
    imageSrc:
      "https://m.media-amazon.com/images/I/61nQOfGrXYL._AC_UF894,1000_QL80_.jpg",
    imageAlt: "Another variant of motor.",
  },
  {
    id: 12,
    name: "Focus Paper Refill (Special Edition)",
    category: "Stationery",
    href: "/products/focus-paper-refill-3",
    price: "$89",
    imageSrc:
      "https://m.media-amazon.com/images/I/61c9DWyge1L._AC_UF1000,1000_QL80_.jpg",
    imageAlt: "Special edition of paper refill.",
  },
];


function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Navbar />

      <div className="flex">
        {/* Sidebar Filter - Reduced Width */}
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
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={product.href}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
