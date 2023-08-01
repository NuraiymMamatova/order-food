import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./store/cart-context";
import { ModalProvider } from "./store/modal-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CartProvider>
  </React.StrictMode>
);
