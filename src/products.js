import React from "react";
import mercado from "./sites logos/mercado.jpg";
import tunisianet from "./sites logos/tunisianet.jpg";
import jumia from "./sites logos/jumia.jpg";
import savanna from "./sites logos/savanna.jpg";
import "./products.css";
function ProductsComponent({ products }) {
  return (
    <div>
      <div id="prd" className="container mt-5 mb-5">
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
                  <div className="d-flex flex-row"></div>
                  <div className="mt-1 mb-1 spec-1"></div>
                  <div className="mt-1 mb-1 spec-1"></div>
                  <p className="text-justify  para mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
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
                      className="btn btn-outline-danger btn-sm mt-4 font-weight-bold"
                      target="_blank"
                    >
                      Lien Produit
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
