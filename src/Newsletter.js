import React from "react";
import "./Newsletter.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Newsletter = () => {
  return (
    <div>
      <div id="newsletter" className="section mt-0 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter mt-5">
                <p>
                  inscrivez-vous à la <strong>NEWSLETTER</strong>
                </p>
                <form>
                  <input
                    className="input"
                    type="email"
                    placeholder="Entrer Votre Email"
                  />
                  <button className="newsletter-btn mb-5">
                    <FontAwesomeIcon icon={faEnvelope} /> S'inscrire
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
