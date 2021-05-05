import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
