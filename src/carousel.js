import React from "react";
import { useHistory } from "react-router-dom";
import "./carousel.css";
import "../node_modules/bootstrap/js/dist/carousel.js";
const Carousel = () => {
  const history = useHistory();
  return (
    <div
      id="myCarousel"
      class="carousel slide carousel-fade mt-0 pt-0"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <h4>Hp pavillion</h4>
                  <p>
                    Profiter du graphisme ultra-réaliste avec la technologie
                    Dolby Vision.
                  </p>{" "}
                  <br />{" "}
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      history.push({
                        pathname: "/products",
                        state: {
                          userInput: "hp pavilion pc 15",
                        },
                      });
                    }}
                    href="#"
                  >
                    Consultez maintenant
                  </a>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://i.imgur.com/iDwDQ4o.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7 col-12 order-md-1 order-2">
                  <h4>HP OMEN</h4>
                  <p>
                    Grâce au PC portable HP Omen 15-dh1006nk, vous aurez à votre
                    disposition des conditions de jeu optimales pour surpasser
                    vos adversaire
                  </p>{" "}
                  <br />{" "}
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      history.push({
                        pathname: "/products",
                        state: {
                          userInput: "Pc portable HP Omen 15",
                        },
                      });
                    }}
                    href="#"
                  >
                    Consultez maintenant
                  </a>
                </div>
                <div class="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="https://i.imgur.com/tVBy5Q0.png"
                    class="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Carousel;
