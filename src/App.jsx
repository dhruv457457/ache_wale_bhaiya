import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./components/Signin";
import MyOrders from "./components/MyOrders";
import Product from "./components/Product";
import Projects from "./components/Projects";
import Stationery from "./components/Stationery";
import Category from "./components/Category";
import Profile from "./pages/Profile";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";
import ProductDetails from "./components/Productdetails"; // Ensure the path is correct
import ProductDescrip from "./components/ProductDescrip";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDescrip />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminPanel />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
