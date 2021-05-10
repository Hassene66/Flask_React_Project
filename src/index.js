import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import WelcomePage from "./welcomePage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/products" component={HomePage} />
      <Route exact path="/" component={WelcomePage} />
    </Switch>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
