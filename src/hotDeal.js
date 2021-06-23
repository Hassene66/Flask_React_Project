import React, { useState, useEffect } from "react";
import "./hotDeals.css";
import CalculateTimeLeft from "./CalculateTimeLeft";
const HotDeal = () => {
  const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  console.log(timeLeft);
  return (
    <div>
      <div id="hot-deal" className="section mb-0 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>{timeLeft.days}</h3>
                      <span>JOURS</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>{timeLeft.hours}</h3>
                      <span>Heure</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>{timeLeft.minutes}</h3>
                      <span>Mins</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>{timeLeft.seconds}</h3>
                      <span>Secs</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>nouvelle collection jusqu'à 50%</p>
                <a className="primary-btn cta-btn" href="#">
                  Achetez maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
