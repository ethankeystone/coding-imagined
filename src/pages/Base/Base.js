import React from "react";
import logo from "../../images/codinglogo.svg";
import {Link} from "react-router-dom";
import "../../css/NavBar.css";

export default function Base(props) {
    return (
            <div>
                {props.children}
            </div>
        );
}
