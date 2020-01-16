import React, { Component } from 'react';
import "./Node.css"

export default class Node extends Component {

  
  constructor(props) {
    super(props);
    this.changeColor.bind(this)
    this.state = {
      isLoading: false,
      color: "none"
    }
  }

  componentDidMount() {
    this.state = {
      isLoading: false,
      color: "none"
    };
  }
  changeColor() {
    var newColor = (this.state.color == "none") ? "green": "none";
    this.setState({
      isLoading: false,
      color: newColor
    });
  }
  render() {
    const {
      col,
      row
    } = this.props;
    const color = (col + row) % 2 == 0 ? "red" : "green";
    if(this.state.isLoading == true) {
      return (
        <div className={"node "}>
          y
        </div>
      );
    } else {
      return (
        <div className={"node " + this.state.color} onMouseDown={() => {this.changeColor()}}>
        </div>
      );
    }
  }
}
   

