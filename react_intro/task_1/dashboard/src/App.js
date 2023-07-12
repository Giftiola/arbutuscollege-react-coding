import React from "react";
import "./App.css";
import holberton_logo from "./holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <div className="App-header">
<img src={holberton_logo} alt="Holberton School Logo" />

        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;