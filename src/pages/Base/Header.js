import React from "react";
import logo from "../../images/codinglogo.svg";
import {Link} from "react-router-dom";
import "../../css/NavBar.css";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className = "container">
                <img src={logo} className="App-logo" id="App-logo" alt="logo" />
                <h1>
                    <Link to="/" style={{ textDecoration: 'none'}} className = "button">
                      Coding Imagined
                    </Link>
                </h1>
                <nav className="App-Header">
                    <ul className="buttons">
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
}
