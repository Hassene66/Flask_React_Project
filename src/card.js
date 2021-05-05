import React from "react";

function card({ products }) {
  return (
    <>
      {products.map((el, idx) => (
        <div key={idx} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="card-img-top img-fluid img-thumbnail"
                src={el.image_url}
                alt="image1"
                style={{
                  float: "left",
                  width: "250",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{el.titre}</h5>
                <p className="card-text">prix : {el.prix_actuel}</p>
                <p className="card-text">
                  <strong>Site : {el.site}</strong>
                </p>
                <a href={el.url}>link to the product</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default card;
