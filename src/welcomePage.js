import React from "react";
import "./welcomePage.css";
import Carousel from "./carousel";
import ProductCarousel from "./productCarousel";
import Footer from "./footer";
const welcomePage = () => {
  return (
    <div>
      <Carousel />
      <ProductCarousel />
      <Footer />
    </div>
  );
};

export default welcomePage;
