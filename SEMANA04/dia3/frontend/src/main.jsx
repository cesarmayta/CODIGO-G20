import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
