import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App(props) {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HeaderComponent />
        <main style={{ paddingTop: "70px" }}>{props.children}</main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
