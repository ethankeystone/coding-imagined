import React, {Component} from'react';
import Node from "./Node";
export default class PathFindingVisualizer extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            grid: null
        }
    }
    componentDidMount() {
        let width = 10;
        let height = 10;
        var grid = [];
        for (let i = 0; i < width; i++) {
            const currentRow = []
            for (let j = 0; j < height; j ++) {
                currentRow.push({
                    col: i,
                    row: j
                });
            }
            grid.push(currentRow);
        }
        this.setState({
            isLoading: false,
            grid: grid
        });
    }
    render() {
        if(this.state.isLoading) {
            return(
                <div></div>
            );
        } else {
            let grid = this.state.grid;
            return (
                <div className="center">
                   {grid.map(row => {
                        return (
                            <div> 
                                {row.map(node => {
                                    return(
                                        <Node col={node.col} row={node.row}></Node>
                                );
                            })}
                            </div>
                        );
                    }
                   )}
                </div>
            );  
        }
    }
}