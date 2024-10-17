import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LogoCloud from "../components/LogoCloud";
import Category from "../components/Category";
import Grids from "../components/Grids";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; // Import the ScrollToTop component

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Grids />
      <LogoCloud />
      <Footer />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
    </>
  );
}

export default Home;
