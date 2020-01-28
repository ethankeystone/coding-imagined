import React, { Component } from 'react';
import "../css/Node.css"

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

  render() {
    const {
      col,
      row,
      addNode,
      state,
      handleMouseUp,
      handleMouseDown
    } = this.props;
    var color = (state)
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
            onMouseUp={() => handleMouseUp(col, row)}
          >
        </div>
      );
    }
  }
}
   

