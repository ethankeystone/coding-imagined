import React, { Component} from "react";
import Node from "./Node";
import update from 'immutability-helper';
import "./PathFindingVisualizer.css";
import { findAllByTestId } from "@testing-library/react";


export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      grid: null,
      mouseDown: false,
      currentSelection: "1"
    };
    // this.testD();
  }

  // testD() {
  //   const link = 'https://oz4akoxz8g.execute-api.us-east-2.amazonaws.com/Testing/';
  //   let data = {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         'grid':this.state.grid
  //     })
  //     }
  //     fetch(link, data)
  //     .then(response => response.json())  // promise // lmao
  //     .then(response => {
  //         //console.log(response);
  //         //console.log(response['body'][0]);
  //     })
  // }

  createGrid() {
    let width = 15;
    let height = 40;
    var grid = [];
    var id = 0;

    let startNode = {col: 7, row: 5};
    let endNode = {col: 7, row: 30};

    for (let i = 0; i < width; i++) {
      const currentRow = [];
      for (let j = 0; j < height; j++) {
        let nodeState = "none"
        if(i === startNode.col && j === startNode.row) {
          nodeState = "start";
        } else if (i === endNode.col && j === endNode.row) {
          nodeState = "end";
        }
        currentRow.push({
          col: i,
          row: j,
          id: id,
          state: nodeState,
          weightvalue: 0
        });
        id++;
      }
      grid.push(currentRow);
    }
    return (grid);
  }

  componentDidMount() {
    this.resetGrid()
  }

  addNode(row, col) {
    if(this.state.mouseDown) {
      if(this.state.grid[col][row].state === "expand" || this.state.grid[col][row].state === "weight") {
        this.setState({grid: update(this.state.grid, {[col]: {[row]: {state: {$set: "none"}}}})});
      } else if(this.state.grid[col][row].state === "end") {

      } else if(this.state.grid[col][row].state === "start") {

      } else {
        if(this.state.currentSelection === "1") {
          this.setState({grid: update(this.state.grid, {[col]: {[row]: {state: {$set: "expand"}}}})});
        } else if(this.state.currentSelection === "2") {
          this.setState({grid: update(this.state.grid, {[col]: {[row]: {state: {$set: "wall"}}}})});
        }
      }
    }
  }

  handleMouseDown(row, col) {
    if(this.state.grid[col][row].state === "expand" || this.state.grid[col][row].state === "weight") {
      this.setState({grid: update(this.state.grid, {[col]: {[row]: {state: {$set: "none"}}}})});
    } else if(this.state.grid[col][row].state === "end") {

    } else if(this.state.grid[col][row].state === "start") {

    } else {
      if(this.state.currentSelection === "1") {
        this.setState({grid: update(this.state.grid, {[col]: {[row]: {state: {$set: "expand"}}}})});
      } else if (this.state.currentSelection === "2") {
        this.setState({grid: update(this.state.grid, {[col]: {[row]: {state: {$set: "wall"}}}})});
      }
    }
    this.setState({mouseDown: true});
  }

  handleMouseUp() {
    this.setState({mouseDown: false});
  }

  resetGrid() {
    this.setState({
      isLoading: false,
      grid: this.createGrid()
    });
  }



  render() {
    console.log(this.state.grid);
    if (this.state.isLoading) {
      return <div></div>;
    } else {
      let grid = this.state.grid;
      return (
        <div className="center">
          <button onClick={() => this.resetGrid()}> Reset Grid </button>
          <label htmlFor="Weight">Toggle Weights </label>
          <select id = "Weight" onChange={(option)=>this.setState({currentSelection: option.target.value})}>
               <option value = "1">Wall</option>
               <option value = "2">Weights</option>
          </select>
          <label id="Algo"> Select Algorithm </label>
          <select id="Algo">
            <option value = "1"> Dijkstra's </option>
            <option value = "2"> Some other one </option>
          </select>
          <div>
          {grid.map(row => {
            return (
              <div key={row[0].col} className="row">
                {row.map(node => {
                  return <Node
                    col={node.col}
                    row={node.row}
                    key={node.id}
                    addNode={(row, col) => this.addNode(node.row, node.col)}
                    handleMouseDown={(row, col) => this.handleMouseDown(node.row, node.col)}
                    handleMouseUp={() => this.handleMouseUp()}
                    state={node.state}
                    ></Node>;
                })}
              </div>
            );
          })}
          </div>
        </div>
      );
    }
  }
}
