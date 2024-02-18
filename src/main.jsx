import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import AuthRouter from "./AuthRouter.jsx";
import HomePage from "./pages/HomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthRouter />
  </Provider>
);
