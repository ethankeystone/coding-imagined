import React, { Component } from 'react';
import "./Node.css"

export default class Node extends Component {
  render() {
    const {
      col,
      row
    } = this.props;
    const color = (col + row) % 2 == 0 ? "red" : "green";
    return (
      <div className={color} >
      </div>
    );
  
  }
}
   

