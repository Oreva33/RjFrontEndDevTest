import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RoutProvider from "./store/Rout-provider"

ReactDOM.render(
  <RoutProvider>
    <App />
  </RoutProvider>,
  document.getElementById("root")
);
