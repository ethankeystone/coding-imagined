import React, { Component } from "react";
import Node from "./Node";
import "./PathFindingVisualizer.css";

export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      grid: null
    };
  }

  componentDidMount() {
    let width = 10;
    let height = 10;
    var grid = [];
    var id = 0;
    for (let i = 0; i < width; i++) {
      const currentRow = [];
      for (let j = 0; j < height; j++) {
        currentRow.push({
          col: i,
          row: j,
          id: id,
        });
        id++;
      }
      grid.push(currentRow);
    }
    this.setState({
      isLoading: false,
      grid: grid
    });
  }
  render() {
    if (this.state.isLoading) {
      return <div></div>;
    } else {
      let grid = this.state.grid;
      return (
        <div className="center">
          {grid.map(row => {
            return (
              <div key={row[0].col} className="row">
                {row.map(node => {
                  return <Node col={node.col} row={node.row} key={node.id}></Node>;
                })}
              </div>
            );
          })}
        </div>
      );
    }
  }
}
