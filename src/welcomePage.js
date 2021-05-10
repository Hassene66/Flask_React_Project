import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./welcomePage.css";
import Carousel from "./carousel";
import ProductCarousel from "./productCarousel";
import Footer from "./footer";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HotDeal from "./hotDeal";
import Newsletter from "./Newsletter";

const WelcomePage = () => {
  const history = useHistory();
  function onChange(e) {
    e.preventDefault();
    setInput({ ...input, input: e.target.value });
  }
  function onSubmit(e) {
    e.target.reset();
    history.push({
      pathname: "/products",
      state: {
        userInput: input,
      },
    });
  }
  const [input, setInput] = useState("");

  return (
    <div id="navbar">
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4 col-md-4 col-5">
                <a href="/" className="brand-wrap" data-abc="true">
                  <span className="logo">BestDeals</span>
                </a>
              </div>
              <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                <form
                  action="#"
                  className="search-wrap"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="input-group w-100">
                    <input
                      onChange={(e) => onChange(e)}
                      type="text"
                      className="form-control search-form"
                      style={{ width: "55%" }}
                      placeholder="chercher des produits"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-danger search-button"
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </header>
      <Carousel />
      <ProductCarousel />
      <HotDeal />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default WelcomePage;
