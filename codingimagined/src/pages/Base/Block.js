import React from "react";
import logo from "../../images/codinglogo.svg";
import "../../css/Block.css";

function Block() {
  return (
    <div className="block">
        <div className="title"> Name of a Random Project </div>
        <img src={logo} className="image"/>
        <div className="projectDescription"> Text Summary of the Project 
              This is a long ass summary of a project. Some of these projects are cool. Some of them are boring. 
              Hopefully some will provide a use to other people. Otherwise this website is purely meant to boost our resume
        </div>
    </div>
    );
}

export default Block;

