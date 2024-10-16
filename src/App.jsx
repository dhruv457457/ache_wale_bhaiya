// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./components/Signin";
import MyOrders from "./pages/MyOrders";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/orders" element={<MyOrders />} />
          {/* <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
