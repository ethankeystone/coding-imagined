import React, { Component } from "react";
import logo from "../../images/codinglogo.svg";
import "../../css/Block.css";
import {Link} from "react-router-dom";

export default class  Block extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Link to={this.props.link == null ? "/" : this.props.link} style={{ textDecoration: 'none'}} className="block">
          <div className="title"> {this.props.title == null ? "No Title Given" : this.props.title} </div>
          <img src={logo} className="image"/>
          <div className="projectDescription"> 
                {
                  this.props.paragragh == null ? "Text Summary of the Project \
                  This is a long ass summary of a project. Some of these projects \
                   are cool. Some of them are boring. Hopefully some will provide a use to \
                   other people. Otherwise this website is purely meant to boost our resume" : this.props.paragragh
                } 
          </div>
        </Link>
      );
  }
}


