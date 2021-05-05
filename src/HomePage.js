import React, { useEffect, useState } from "react";
import Card from "./card";
import Pagination from "./pagination";
import "./Pagination.css";
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

  console.log("Input : ", input);
  const indexOfLastPost = currentPage * ProductsPerPage;
  const indexOfFirstPost = indexOfLastPost - ProductsPerPage;
  const currentProducts = Products.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(Products.length / ProductsPerPage);
  return (
    <>
      <header className="mb-5">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">Best Price</a>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => onSubmit(e)}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              name="searchField"
              onChange={(e) => onChange(e)}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>

      <div className="container ">
        <Card products={currentProducts} />
        <div>
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
