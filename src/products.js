import React from "react";
import mercado from "./sites logos/mercado.jpg";
import tunisianet from "./sites logos/tunisianet.jpg";
import jumia from "./sites logos/jumia.jpg";
import savanna from "./sites logos/savanna.jpg";
import "./products.css";
function ProductsComponent({ products }) {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-12 col-lg-10">
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
                  <div className="text-center">
                    <h4 className="text-nowrap my-1">
                      {el.prix_actuel ? el.prix_actuel : el.prix_initiale}
                    </h4>

                    <div className=" d-flex align-items-start flex-column">
                      <span className="strike-text  m-auto">
                        {el.prix_actuel && el.prix_initiale
                          ? el.prix_initiale
                          : null}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <img
                      className="img-fluid img-responsive rounded product-image"
                      style={{
                        width: "60%",
                        margin: "auto",
                      }}
                      src={
                        el.site == "Mercado"
                          ? mercado
                          : el.site == "Tunisianet"
                          ? tunisianet
                          : el.site == "Jumia"
                          ? jumia
                          : el.site == "Savanna"
                          ? savanna
                          : null
                      }
                    />
                    <a
                      href={el.url}
                      className="btn btn-outline-primary btn-sm mt-4"
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
