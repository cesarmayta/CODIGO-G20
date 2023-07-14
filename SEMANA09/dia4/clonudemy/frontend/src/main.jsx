import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App";
import "normalize.css";
import "./styles/index.scss";
import "./styles/Fe.scss";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
