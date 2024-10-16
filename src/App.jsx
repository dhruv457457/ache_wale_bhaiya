// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./components/Signin";
import MyOrders from "./pages/MyOrders";
import Product from "./components/Product";
import Projects from "./components/Projects";
import Stationery from "./components/Stationery";
import Category from "./components/Category";
import Profile from "./pages/Profile";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/Stationery" element={<Stationery />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
