import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store";
import "modern-normalize/modern-normalize.css";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </Provider>,
  document.getElementById("root")
);