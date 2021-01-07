import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route } from "react-router-dom";

import Homepage from "./features/Homepage";
import ProductOverview from "./features/ProductOverview";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/category/:id">
          <ProductOverview />
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
