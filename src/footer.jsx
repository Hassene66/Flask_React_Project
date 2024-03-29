import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer container-fluid  bg-dark text-light ">
        <div class="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
          <div class="col-12">
            <div class="row row-2">
              <div class="col-sm-3 text-md-center">
                <h5>
                  <span>
                    {" "}
                    <i class="fa fa-firefox text-light" aria-hidden="true"></i>
                  </span>
                  <b> Electro</b>
                </h5>
              </div>
              <div class="col-sm-3 my-sm-0 mt-5">
                <ul class="list-unstyled">
                  <li class="mt-0">Platform</li>
                  <li>Help Center</li>
                  <li>Security</li>
                </ul>
              </div>
              <div class="col-sm-3 my-sm-0 mt-5">
                <ul class="list-unstyled">
                  <li class="mt-0">Customers</li>
                  <li>Use Cases</li>
                  <li>Customers Services</li>
                </ul>
              </div>
              <div class="col-sm-3 my-sm-0 mt-5">
                <ul class="list-unstyled">
                  <li class="mt-0">Company</li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
          <div class="col-12">
            <div class="row my-4 row-1 no-gutters">
              <div class="col-sm-3 col-auto text-center">
                <small>&#9400; Electro Softwere</small>
              </div>
              <div class="col-md-3 col-auto "></div>
              <div class="col-md-3 col-auto"></div>
              <div class="col my-auto text-md-left text-right ">
                {" "}
                <small>
                  {" "}
                  Electro@gmail.com{" "}
                  <span>
                    <img
                      src="https://i.imgur.com/TtB6MDc.png"
                      class="img-fluid "
                      width="25"
                    />
                  </span>{" "}
                  <span>
                    <img
                      src="https://i.imgur.com/N90KDYM.png"
                      class="img-fluid "
                      width="25"
                    />
                  </span>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
