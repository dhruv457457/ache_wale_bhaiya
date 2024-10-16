import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LogoCloud from "../components/LogoCloud";
import Category from "../components/Category";
import Grids from "../components/Grids";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Grids />
      <LogoCloud />
      <Footer />
    </>
  );
}

export default Home;
