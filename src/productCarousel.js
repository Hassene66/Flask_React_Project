import React from "react";
import { useHistory } from "react-router-dom";
import "./productCarousel.css";
const ProductCarousel = () => {
  const history = useHistory();

  return (
    <div id="productCarousel" className=" mt-4 container mt-100">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category" />
                </div>
                <div className="thumblist">
                  <img src="https://i.imgur.com/ILEU18M.jpg" alt="Category" />
                  <img src="https://i.imgur.com/2kePJmX.jpg" alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">Pc Portable</h4>
              <p className="text-muted">A partir de 500 DT</p>
              <a
                className="text-white btn btn-danger btn-sm"
                href="#"
                data-abc="true"
                onClick={(e) => {
                  e.preventDefault();
                  history.push({
                    pathname: "/products",
                    state: {
                      userInput: "pc i7",
                    },
                  });
                }}
              >
                Voir produits
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src="https://i.imgur.com/uRgdVY1.jpg" alt="Category" />
                </div>
                <div className="thumblist">
                  <img src="https://i.imgur.com/VwSKS7A.jpg" alt="Category" />
                  <img src="https://i.imgur.com/gTvZ2H5.jpg" alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">SmartPhone</h4>
              <p className="text-muted">A partir de 200 DT</p>
              <a
                className="text-white btn btn-danger btn-sm"
                href="#"
                data-abc="true"
                onClick={(e) => {
                  e.preventDefault();
                  history.push({
                    pathname: "/products",
                    state: {
                      userInput: "samsung smartphone",
                    },
                  });
                }}
              >
                Voir produits
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src="https://i.imgur.com/0jO40CF.jpg" alt="Category" />
                </div>
                <div className="thumblist">
                  <img src="https://i.imgur.com/dWYAg41.jpg" alt="Category" />
                  <img src="https://i.imgur.com/5oQEZSC.jpg" alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">Accessoire</h4>
              <p className="text-muted"> A partir de 9 DT</p>
              <a
                className="text-white btn btn-danger btn-sm"
                href="#"
                data-abc="true"
                onClick={(e) => {
                  e.preventDefault();
                  history.push({
                    pathname: "/products",
                    state: {
                      userInput: "pc",
                    },
                  });
                }}
              >
                Voir produits
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
