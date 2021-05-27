import React, { useEffect, useState } from "react";
import Footer from "./footer";
import "./navbar.css";
import ProductsComponent from "./products";
import Pagination from "./pagination";
import "./Pagination.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import IMG from "./images/logo.png";
function HomePage(props = null) {
  const [Products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [Submitted, setSubmitted] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props != undefined) {
      setInput(props.location.state.userInput);
      fetch("/api/product", {
        method: "POST",
        cache: "no-cache",
        headers: {
          content_type: "application/json",
        },
        body: JSON.stringify(props.location.state.userInput),
      })
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => setLoading(false));
      setCurrentPage(1);
    } else {
      console.log("inside decond fetch");
      if (input != "") {
        fetch("/api/product", {
          method: "POST",
          cache: "no-cache",
          headers: {
            content_type: "application/json",
          },
          body: JSON.stringify(input),
        })
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .then(() => setLoading(false));
        setCurrentPage(1);
      }
    }
  }, [Submitted]);
  console.log("data : ", Products);
  console.log("input: ", input);
  function onChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  function onSubmit(e) {
    setLoading(true);
    e.preventDefault();
    props.location.state.userInput = input;
    setSubmitted(Submitted + 1);
  }

  const indexOfLastPost = currentPage * ProductsPerPage;
  const indexOfFirstPost = indexOfLastPost - ProductsPerPage;
  const currentProducts = Products.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(Products.length / ProductsPerPage);

  console.log("indexOfLastPost : ", indexOfLastPost);
  console.log("indexOfFirstPost : ", indexOfFirstPost);
  console.log("currentProducts : ", currentProducts);
  console.log("howManyPages : ", howManyPages);
  return (
    <motion.div
      id="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ dalay: 2, duration: 1 }}
    >
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4 col-md-4 col-5">
                <a href="/" className="brand-wrap" data-abc="true">
                  <img src={IMG} alt="" />
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
                      style={{ width: "70%", height: "45px" }}
                      placeholder="chercher des produits"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-danger search-button"
                        type="submit"
                        style={{ backgroundColor: "#ff0000", height: "45px" }}
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

      <div className="container d-flex flex-column min-vh-100 ">
        {loading ? (
          <div
            className="d-flex justify-content-center "
            style={{ marginTop: "25%" }}
          >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : Products.length == 0 ? (
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "25%" }}
          >
            <h2>Produit non trouvé :(</h2>
          </div>
        ) : (
          <div>
            <div>
              <ProductsComponent products={currentProducts} />
            </div>
            {howManyPages ? (
              <Pagination
                pages={howManyPages}
                setCurrentPage={setCurrentPage}
              />
            ) : null}
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
}

export default HomePage;
