import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
// Importing the CSS files
import "./styles/main.css";
import "./styles/header.css";
import "./styles/menu.css";
import "./styles/contact.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
