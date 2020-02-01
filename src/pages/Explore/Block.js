import React, { Component } from "react";
import logo from "../../images/codinglogo.svg";
import "../../css/Block.css";
import {Link} from "react-router-dom";

export default class Block extends React.Component {
    render() {
        return (
                <Link to={this.props.link == undefined ? "/" : this.props.link} className="block" style={{ textDecoration: 'none' }}>
                    <div className="title"> {this.props.title} </div>
                        <img src={logo} className="image"/>
                        <div className="projectDescription">
                        {this.props.paragragh}
                    </div>
                </Link>
            );
    }
}
