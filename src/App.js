import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import { Button } from "antd";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <header className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>Hello World</Button>
        </header>
      </ConfigProvider>
    </div>
  );
}

export default App;
