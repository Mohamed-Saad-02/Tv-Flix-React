import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MoviProvider from "./context/moviContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviProvider>
      <App />
    </MoviProvider>
  </React.StrictMode>
);
