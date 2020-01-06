import React from "react";
import logo from "./codinglogo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="buttons">
          <p className="Header-Button" tag="sample1">
            Explore
          </p>
          <p className="Header-Button" tag="sample2">
            About us
          </p>
          <p className="Header-Button" tag="sample3">
            More Stuff
          </p>
          <p className="Header-Button" tag="sample4">
            Even More Stuff
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
