import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route } from "react-router-dom";

import Homepage from "./features/Homepage";
import ProductOverview from "./features/ProductOverview";
import ProductDetail from "./features/ProductDetail";
import NotFound from "./components/NotFound";
import Bag from "./features/Bag";
import Category from "./features/Category";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/category/:categoryId">
          <ProductOverview />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/bag">
          <Bag />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
