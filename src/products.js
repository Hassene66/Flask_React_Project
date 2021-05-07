import React from "react";
import "./products.css";
function ProductsComponent({ products }) {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            {products.map((el, idx) => (
              <div key={idx} className="row p-2 bg-white border rounded my-3">
                <div className="col-md-3 mt-1">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={el.image_url}
                  />
                </div>
                <div className="col-md-6 mt-1">
                  <h5>{el.titre}</h5>
                  <div className="d-flex flex-row">
                    <div className="ratings mr-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-1 spec-1">
                    <span>100% cotton</span>
                    <span className="dot" />
                    <span>Light weight</span>
                    <span className="dot" />
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mt-1 mb-1 spec-1">
                    <span>Unique design</span>
                    <span className="dot" />
                    <span>For men</span>
                    <span className="dot" />
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-justify text-truncate para mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center">
                    <h4 className="mr-1">
                      {el.prix_actuel ? el.prix_actuel : el.prix_initiale}
                    </h4>
                    <span className="strike-text">{el.prix_initiale}</span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <button className="btn btn-primary btn-sm" type="button">
                      Details
                    </button>
                    <a
                      href={el.url}
                      className="btn btn-outline-primary btn-sm mt-2"
                      target="_blank"
                    >
                      Product Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
