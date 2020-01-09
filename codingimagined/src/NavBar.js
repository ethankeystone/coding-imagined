import React from "react";
import logo from "./codinglogo.svg";
import logo_two from "./logo.svg";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return ( 
        <header>
            <div className = "container">
            <img src={logo_two} className="App-logo" id="App-logo-two" alt="logo-two" />
            <img src={logo} className="App-logo" id="App-logo" alt="logo" />
            <h1>
                Coding Imagined
            </h1>
            <nav className="App-Header">
                <ul class="buttons">
                    <li>
                        <Link to="/explore" style={{ textDecoration: 'none'}} className = "button">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ textDecoration: 'none'}} className = "button">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/morestuff" style={{ textDecoration: 'none'}} className = "button">
                        More Stuff
                        </Link>
                    </li>
                    <li>
                        <Link to="/evenMoreStuff" style={{ textDecoration: 'none'}} className = "button">
                        Even More Stuff
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default NavBar;