import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LogoCloud from "../components/LogoCloud";
import Category from "../components/Category";
import Form from "../components/Form";
import Grids from "../components/Grids";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Grids />
      <LogoCloud />
    </>
  );
}

export default Home;
