import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Link to="about">About Us</Link>

      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React Router</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/index.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
