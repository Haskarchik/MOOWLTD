import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./components/18n.js";
import Preloader from "./components/Preloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader/>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
