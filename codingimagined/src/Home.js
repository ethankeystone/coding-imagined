import React from "react";
import logo from "./codinglogo.svg";
import "./App.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="buttons">
            <p className="Header-Button" tag="sample1">
                <Link to="/explore" style={{ textDecoration: 'none'}}>
                   Explore
                </Link>
            </p>
            <p className="Header-Button" tag="sample2">
                <Link to="/about" style={{ textDecoration: 'none'}}>
                   About Us
                </Link>
            </p>
            <p className="Header-Button" tag="sample3">
                <Link to="/morestuff" style={{ textDecoration: 'none'}}>
                   More Stuff
                </Link>
            </p>
            <p className="Header-Button" tag="sample4">
                <Link to="/evenMoreStuff" style={{ textDecoration: 'none'}}>
                   Even More Stuff
                </Link>
            </p>
        </div>
        </header>
    </div>
    );
}

export default Home;