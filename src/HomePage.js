import React, { useEffect, useState } from "react";
import Card from "./card";
import "./navbar.css";
import ProductsComponent from "./products";
import Pagination from "./pagination";
import "./Pagination.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomePage() {
  const [Products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [Submitted, setSubmitted] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(10);
  useEffect(() => {
    if (input !== "") {
      console.log("inside fetch :", input);
      fetch("/product", {
        method: "POST",
        cache: "no-cache",
        headers: {
          content_type: "application/json",
        },
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [Submitted]);
  console.log("data : ", Products);
  function onChange(e) {
    e.preventDefault();
    setInput({ ...input, input: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
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
    <>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4 col-md-4 col-5">
                <a href="#" className="brand-wrap" data-abc="true">
                  {/* <img class="logo" src="http://ampexamples.com/data/upload/2017/08/bootstrap2_logo.png"> */}{" "}
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
                        className="btn btn-primary search-button"
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

      <div className="container ">
        <ProductsComponent products={currentProducts} />
        <div>
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
