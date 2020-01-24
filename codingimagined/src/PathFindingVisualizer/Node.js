import React, { Component } from 'react';
import "./Node.css"

export default class Node extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      color: "none"
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      color: "none",
      col: this.props.col,
      row: this.props.row
    });
  }

  determineColor(nodeState) {
    if(nodeState === "none") {
      return("none");
    } else if (nodeState === "expand") {
      return ("green");
    } else if (nodeState === "path") {
      return ("blue");
    } else {
      return("error");
    }
  }
  render() {
    const {
      col,
      row,
      addNode,
      state,
      handleMouseUp,
      handleMouseDown
    } = this.props;
    var color = this.determineColor(state)
    this.state.color = color;
    if(this.state.isLoading === true) {
      return (
        <div className={"node "}>
          Yikes
        </div>
      );
    } else {
      return (
        <div className={"node " + this.state.color}
           onMouseDown={() => {
             handleMouseDown()
          }}
            onMouseEnter={() => addNode(col, row)}
            onMouseUp={() => handleMouseUp()}
          >
        </div>
      );
    }
  }
}
   

