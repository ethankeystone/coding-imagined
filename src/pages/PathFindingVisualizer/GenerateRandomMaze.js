import { findAllInRenderedTree } from "react-dom/test-utils";

export default class GenerateRandomMaze {
    constructor(width, height) {
      

    }

    maze(x,y) {
        var grid = []
        var deadEnd = []
        var amountOfWalls = 0; 
        var gridSize = x * y;
        for(let i = 0; i < x; i++) {
            const currentRow = []
            for (let j = 0; j < y; j++) {
                currentRow.push({
                    type: "wall",
                    width: i,
                    height: j,
                });
            }
            grid.push(currentRow);
        }
        var prev = [];
        var current = grid[0][1]
        while(amountOfWalls < 3 * gridSize / 4) {
            let adj = this.getAdjacent(current.width, current.height, grid);
            if (adj.length == 0) {
                current = this.backTrack(prev);
                continue;
            }
            let random = Math.floor(Math.random() * adj.length);
            grid[current.width][current.height].type = "Not wall";
            prev.push(current);

            let next = adj[random];
            
            current = next;                     
            amountOfWalls++;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        }   

        let start = this.findRandomSquare(grid);
        let end = this.findRandomSquare(grid);
        while (this.findDistance(start, end) < 20 ) {
            end = this.findRandomSquare(grid);
        }

        grid[start[0]][start[1]].type = "start";
        grid[end[0]][end[1]].type = "end";

        return grid;
    }    

    backTrack(prev) {
        let random = Math.floor(Math.random() * prev.length);
        return (prev[random]);
    }

    getAdjOnly(col, row, grid) {
        let adjConsts = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        let adj = [];


        for (let i = 0; i < 4; i++) {
            try {
                if (grid[col + adjConsts[i][0]][row + adjConsts[i][1]] != null) {
                        adj.push(grid[col + adjConsts[i][0]][row + adjConsts[i][1]]);
                }
            } catch (error) { }
        }
        return adj;
    }
    getAdjacent(col, row, grid) {
        let adjConsts = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        let adj = [];


        for (let i = 0; i < 4; i++) {
            try {
                if (grid[col + adjConsts[i][0]][row + adjConsts[i][1]] != null) {
                    if(grid[col + adjConsts[i][0]][row + adjConsts[i][1]].type != "Not wall") {
                        let adjToCurrent = this.getAdjOnly(col + adjConsts[i][0], row + adjConsts[i][1], grid);
                        let amountAdj = 0;
                        adjToCurrent.forEach(node => {
                            if (node.type == "Not wall") {
                                amountAdj ++;
                            }
                        })
                        if(amountAdj <= 1) {
                            adj.push(grid[col + adjConsts[i][0]][row + adjConsts[i][1]]);
                        }
                    }
                }
            } catch (error) { }
        }
        return adj;
    }

    findRandomSquare(grid) {
        let count = 0;
        while(count < 1000) {
            let width = Math.floor(Math.random() * grid.length);
            let height = Math.floor(Math.random() * grid[width].length);
            if (grid[width][height].type == "Not wall") {
                return [width, height];
            }
            count++;
        }
    }

    findDistance(p1, p2) {
        return (Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)));
    }
}