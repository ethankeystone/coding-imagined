import React, { Component } from "react";
import Node from "./Node";
import update from 'immutability-helper';
import "../../css/PathFindingVisualizer.css";
import AStar from "./Algorithms/AStar"
import Dijkstra from "./Algorithms/Dijkstra"
import BreadthFirst from "./Algorithms/BreadthFirst"
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";

export default class PathFindingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            grid: null,
            mouseDown: false,
            currentSelection: "1",
            stopAnimation: false,
            isRunningAnimation: false,
            algoSelection: "1",
            startNode: { col: 7, row: 5 },
            endNode: { col: 7, row: 30 },
            mouseOverNode: null
        };
    }


    createGrid() {
        let width = 15;
        let height = 40;
        var grid = [];
        var id = 0;

        for (let i = 0; i < width; i++) {
            const currentRow = [];
            for (let j = 0; j < height; j++) {
                let nodeState = "none"
                if (i === this.state.startNode.col && j === this.state.startNode.row) {
                    nodeState = "start";
                } else if (i === this.state.endNode.col && j === this.state.endNode.row) {
                    nodeState = "end";
                }
                let renderTime = j + i;
                currentRow.push({
                    col: i,
                    row: j,
                    state: nodeState,
                    id: id,
                    isRendered: false,
                    renderTime: renderTime,
                    weight: -1
                });
                id++;
            }
            grid.push(currentRow);
        }
        return (grid);
    }

    componentDidMount() {
        this.resetGrid();
    }



    addNode(row, col) {
        if (this.state.currentSelection === "1") {
            this.setState({ grid: update(this.state.grid, { [col]: { [row]: { state: { $set: "wall" } } } }) });
        }   
        else if (this.state.currentSelection === "3") {
            this.state.grid[this.state.startNode.col][this.state.startNode.row].state = "none";
            this.setState({ grid: update(this.state.grid, { [col]: { [row]: { state: { $set: "start" } } } }) });
            this.state.startNode = { col: col, row: row };
        } else if (this.state.currentSelection === "4") {
            this.state.grid[this.state.endNode.col][this.state.endNode.row].state = "end";
            this.setState({ grid: update(this.state.grid, { [col]: { [row]: { state: { $set: "end" } } } }) });
            this.state.endNode = { col: col, row: row };
        }
    }


    handleMouseDown(row, col) {
        console.log(this.state.mouseDown);
        if (this.state.mouseDown == false) return;

        if (this.state.currentSelection === "1") {
            this.setState({ grid: update(this.state.grid, { [col]: { [row]: { state: { $set: "wall" } } } }) });
        }   
        else if (this.state.currentSelection === "3") {
            this.state.grid[this.state.startNode.col][this.state.startNode.row].state = "none";
            this.setState({ grid: update(this.state.grid, { [col]: { [row]: { state: { $set: "start" } } } }) });
            this.state.startNode = { col: col, row: row };
        } else if (this.state.currentSelection === "4") {
            this.state.grid[this.state.endNode.col][this.state.endNode.row].state = "end";
            this.setState({ grid: update(this.state.grid, { [col]: { [row]: { state: { $set: "end" } } } }) });
            this.state.endNode = { col: col, row: row };
        }
    }

    handleMouseUp() {
        console.log("hello");
        //this.setState({ mouseDown: false });
    }

    resetGrid() {
        this.state.stopAnimation = true;
        this.setState({
            isLoading: false,
            grid: this.createGrid()
        });
    }

    generateRandomGrid() {
        let width = 15;
        let height = 40;
        var grid = [];
        var id = 0;

        let startNode = this.state.startNode;
        let endNode = this.state.endNode;

        for (let i = 0; i < width; i++) {
            const currentRow = [];
            for (let j = 0; j < height; j++) {
                let nodeState = "expand"
                if (i === startNode.col && j === startNode.row) {
                    nodeState = "start";
                } else if (i === endNode.col && j === endNode.row) {
                    nodeState = "end";
                }
                currentRow.push({
                    col: i,
                    row: j,
                    id: id,
                    state: nodeState,
                    weightvalue: 0,
                    isRendered: false,
                    weight: -1
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

    findPath() {
        if (this.state.grid != null && !this.state.isRunningAnimation) {
            let algo = null;
            if (this.state.algoSelection === "1") {
                algo = new AStar(this.state.grid, this.state.grid[this.state.startNode.col][this.state.startNode.row], this.state.grid[this.state.endNode.col][this.state.endNode.row]);
            } else if (this.state.algoSelection === "2") {
                algo = new Dijkstra(this.state.grid, this.state.grid[this.state.startNode.col][this.state.startNode.row], this.state.grid[this.state.endNode.col][this.state.endNode.row]);
            } else if (this.state.algoSelection === "3") {
                algo = new BreadthFirst(this.state.grid, this.state.grid[this.state.startNode.col][this.state.startNode.row], this.state.grid[this.state.endNode.col][this.state.endNode.row]);
            }
            //redundant get rid of this if you dont need it ethan
            if (this.state.isRunningAnimation) {
                this.state.isRunningAnimation = false;
            }

            let output = algo.order;
            let outer = algo.openList;
            let amountPerIt = Math.round(outer.length / output.length);

            let count = 0;
            let secondCount = 0;
            var stop = setInterval(
                    function(y) {
                        y = count;
                        let lastIt = false;
                        if (y > output.length - 2) {
                            lastIt = true;
                            clearInterval(stop);
                        } 
                        // if(!lastIt) {
                        //     if(secondCount < outer.length) {
                        //         for (let i = 0; i < amountPerIt; i++) {
                        //             this.setState({grid: update(this.state.grid, {[outer[secondCount].col]: {[outer[secondCount].row]: {state: {$set: "secondaryExpand"}}}})});
                        //             secondCount++;
                        //         }
                        //     }
                        // } else {
                        //     for (let i = secondCount; i < outer.length; i++) {
                        //         this.setState({grid: update(this.state.grid, {[outer[secondCount].col]: {[outer[secondCount].row]: {state: {$set: "secondaryExpand"}}}})});
                        //         secondCount++;
                        //     }
                        // }
                       
                        //this.state.grid[output[y].col][output[y].row].weight = output[y].id;
                        this.setState({grid: update(this.state.grid, {[output[y].col]: {[output[y].row]: {state: {$set: "expand"}}}})});
                        count++;
                        
                    }.bind(this), 
                    count * 200, count
                );
        this.state.isRunningAnimation = false;
        }
    }

    render() {
        this.mouseDown = false;
        if (this.state.isLoading) {
            return <div></div>;
        } else {
            let grid = this.state.grid;
            return (
                <div className="center">
                    <button onClick={() => this.generateRandomGrid()}> Generate Maze </button>
                    <button onClick={() => this.resetGrid()}> Reset Grid </button>
                    <button onClick={() => this.findPath()}> Find Path </button>
                    <label htmlFor="Weight">Toggle Placement</label>
                    <select id="Weight" onChange={(option) => this.setState({ currentSelection: option.target.value })}>
                        <option value="1">Wall</option>
                        <option value="2">Weights</option>
                        <option value="3">Start Node</option>
                        <option value="4">End Node</option>
                    </select>
                    <label id="Algo"> Select Algorithm </label>
                    <select id="Algo" onChange={(option) => this.setState({ algoSelection: option.target.value })}>
                        <option value="1"> A-Star </option>
                        <option value="2"> Dijkstra's </option>
                        <option value="3"> BreadthFirst </option>
                    </select>
                    <div onMouseDown={() => this.state.mouseDown = true} onMouseUp={() => this.state.mouseDown = false}>
                        {grid.map(row => {
                            return (
                                <div key={row[0].col} className="row">
                                    {row.map(node => {
                                        return <Node
                                            col={node.col}
                                            row={node.row}
                                            key={node.id}
                                            renderTime={node.renderTime}
                                            addNode={() => this.addNode(node.row, node.col)}
                                            handleMouseDown={() => this.addNode(node.row, node.col)}
                                            handleMouseOver={() => this.handleMouseDown(node.row, node.col)}
                                            //handleMouseUp={() => console.log("hihi")}
                                            state={node.state}
                                            isRendered={false}
                                            weight={node.weight}
                                        ></Node>;
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div >
            );
        }
    }
}
